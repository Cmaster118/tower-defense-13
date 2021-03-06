function defineEnemies(levels) {
	for (var i = 1; i < levels + 1; i++) {
		var half = i / 2;
		enemies.push({
			level: i,
			size: half * 10,
			speed: half,
			health: half * 10,
			targetX: null,
			targetY: null,
			path: null,
			x: null,
			y: null,
			pixelX: null,
			pixelY: null,
			pathIndex: 0,
			color:"rgb(0,0,0)"
		});
	}
}

function makeWaves(levels) {
	var typesOfEnemies = enemies.length;
	for (var l = 1; l < levels+1; l++) {
		var wave = [];
		var used = [];
		var enemyId = 0;
		for (var e = l; e > 0; e--) {
			var enemyNumbers = random(floor(e / 2), floor(e * 2)) + e;
			for (var n = 0; n < e*2; n++) {
				var side = random(0, 3)
				// 0-3 top-left clockwise
				var x = 0;
				var y = 0;
				if (side === 0 || side === 2) {
					x = random(0, canvasWidth - 1);
					if (side === 2) {
						y = canvasWidth - 1;
					}
				} else if (side === 1 || side === 3) {
					y = random(0, canvasHeight - 1);
					if (side === 1) {
						x = canvasHeight - 1;
					}
				}
				used.push([x, y]);
				var data = cloneData(enemies[enemyId], ["x", "y", "pixelX", "pixelY"], [xModifier, yModifier, pixelXModifier, pixelYModifier], [x, y]);
				wave.push(data);
			}
			enemyId++;
		}
		waves.push(wave);
	}
}

function xModifier(data, attribute, add) {
	return add[0];
}

function yModifier(data, attribute, add) {
	return add[1];
}

function pixelXModifier(data, attribute, add) {
	return centerSymmetrical(add[0], data.size);
}

function pixelYModifier(data, attribute, add) {
	return centerSymmetrical(add[1], data.size);
}

function drawEnemies() {
	forEach(wave, function(index) {
		if (this.health < 1) {
			destroyEnemy(this, index);
		} else {
			context.beginPath();
			context.fillStyle = this.color;
			context.fillRect(this.pixelX, this.pixelY, this.size, this.size);
			context.fill();
		}
	});
}
//unoptomized/incomplete

function moveEnemies() {
	forEach(wave, function(index) {
		var enemy = this;
		if (enemy.pathIndex < enemy[PATH][LENGTH]) {
			var target = enemy[PATH][enemy.pathIndex];
			enemy.x = modulus(enemy.pixelX + (enemy.size / 2), tileSize);
			enemy.y = modulus(enemy.pixelY + (enemy.size / 2), tileSize);
			enemy.targetX = target.x;
			enemy.targetY = target.y;
			var tile = map[enemy.y][enemy.x];
			var speed = enemy[SPEED] / tile[SPEED];
			var x = centerSymmetrical(enemy.targetX, enemy.size);
			var y = centerSymmetrical(enemy.targetY, enemy.size);
			if (round(enemy.pixelX) < x) {
				if (enemy.pixelX + speed > x) {
					enemy.pixelX = x
				} else {
					enemy.pixelX += speed;
				}
			} else if (round(enemy.pixelY) < y) {
				if (enemy.pixelY + speed > y) {
					enemy.pixelY = y
				} else {
					enemy.pixelY += speed;
				}
			} else if (round(enemy.pixelX) > x) {
				if (enemy.pixelX - speed < x) {
					enemy.pixelX = x
				} else {
					enemy.pixelX -= speed;
				}
			} else if (round(enemy.pixelY) > y) {
				if (enemy.pixelY - speed < y) {
					enemy.pixelY = y
				} else {
					enemy.pixelY -= speed;
				}
			}
			if (round(enemy.pixelX) === centerSymmetrical(enemy.targetX, enemy.size) && round(enemy.pixelY) === centerSymmetrical(enemy.targetY, enemy.size)) {
				enemy.pathIndex++;
			}
		}
		var base = getBaseCoords()
		if (enemy.x === base.x && enemy.y === base.y) {
			reachBase(enemy);
			destroyUnit(enemy[NAME])
		}
	});
}

function destroyEnemy(enemy, index) {
	var x = enemy.pixelX;
	var y = enemy.pixelY;
	var modifier = enemy.size / 2;
	makeParticles(20, 60, [2, 7], [-2, 2, -2, 2], [x, y - modifier, x + modifier, y + modifier], enemy.color);
	wave.splice(index, 1);
}