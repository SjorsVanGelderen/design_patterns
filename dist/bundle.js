/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vector2; });
var Vector2 = (function () {
    function Vector2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Vector2.prototype.add = function (vector) {
        this.x += vector.x;
        this.y += vector.y;
    };
    Vector2.prototype.sub = function (vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    };
    Vector2.prototype.mul = function (scalar) {
        this.x *= scalar;
        this.y *= scalar;
    };
    Vector2.prototype.mag = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
    Vector2.prototype.norm = function () {
        var mag = this.mag();
        this.x /= mag;
        this.y /= mag;
    };
    Vector2.prototype.dist = function (vector) {
        return new Vector2(vector.x - this.x, vector.y - this.y).mag();
    };
    return Vector2;
}());



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__iterator__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return State; });

var State = (function () {
    function State() {
        this.populator = new __WEBPACK_IMPORTED_MODULE_0__iterator__["a" /* LevelPopulator */]();
        this.entities = this.populator.next();
    }
    return State;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__option_and_visitor__ = __webpack_require__(4);
/* unused harmony export Entity */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Enemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Projectile; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Entity = (function () {
    function Entity(filename) {
        this.sprite = new Image();
        this.sprite.src = "assets/" + filename;
    }
    Entity.prototype.draw = function (context) {
        var sprite_size = this.sprite.width / this.frame_amount;
        context.drawImage(this.sprite, this.frame * sprite_size, 0, sprite_size, sprite_size, -sprite_size * 0.5 + this.position.x, -sprite_size * 0.5 + this.position.y, sprite_size, sprite_size);
    };
    return Entity;
}());

var Player = (function (_super) {
    __extends(Player, _super);
    function Player(position) {
        if (position === void 0) { position = new __WEBPACK_IMPORTED_MODULE_0__vector2__["a" /* Vector2 */](); }
        var _this = _super.call(this, "player.png") || this;
        _this.position = new __WEBPACK_IMPORTED_MODULE_0__vector2__["a" /* Vector2 */]();
        _this.velocity = new __WEBPACK_IMPORTED_MODULE_0__vector2__["a" /* Vector2 */](1, 1);
        _this.frame = 0;
        _this.frame_amount = 8;
        _this.count = 0;
        _this.theta = 0;
        _this.position = position;
        return _this;
    }
    Player.prototype.update = function (state) {
        this.count += 1;
        if (this.count == 2) {
            this.frame = (this.frame + 1) % this.frame_amount;
            this.count = 0;
        }
        this.theta += 0.01;
        this.position.x = Math.sin(this.theta) * 64 + 64;
        this.position.y = Math.sin(this.theta * 2) * 64 + 64;
    };
    return Player;
}(Entity));

var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy(position) {
        if (position === void 0) { position = new __WEBPACK_IMPORTED_MODULE_0__vector2__["a" /* Vector2 */](); }
        var _this = _super.call(this, "enemy.png") || this;
        _this.position = new __WEBPACK_IMPORTED_MODULE_0__vector2__["a" /* Vector2 */](1);
        _this.velocity = new __WEBPACK_IMPORTED_MODULE_0__vector2__["a" /* Vector2 */](1, 0);
        _this.frame = 0;
        _this.frame_amount = 8;
        _this.count = 0;
        _this.something = new __WEBPACK_IMPORTED_MODULE_1__option_and_visitor__["a" /* Some */](5);
        _this.position = position;
        console.log(_this.something.visit(new __WEBPACK_IMPORTED_MODULE_1__option_and_visitor__["b" /* Visitor */]()));
        return _this;
    }
    Enemy.prototype.update = function (state) {
        this.count += 1;
        if (this.count == 1) {
            this.frame = (this.frame + 1) % this.frame_amount;
            this.count = 0;
        }
        this.position.add(this.velocity);
    };
    return Enemy;
}(Entity));

var Projectile = (function (_super) {
    __extends(Projectile, _super);
    function Projectile(position) {
        if (position === void 0) { position = new __WEBPACK_IMPORTED_MODULE_0__vector2__["a" /* Vector2 */](); }
        var _this = _super.call(this, "projectile.png") || this;
        _this.position = new __WEBPACK_IMPORTED_MODULE_0__vector2__["a" /* Vector2 */]();
        _this.velocity = new __WEBPACK_IMPORTED_MODULE_0__vector2__["a" /* Vector2 */](Math.random() * 5 - 5, Math.random() * 5 - 5);
        _this.frame = 0;
        _this.frame_amount = 2;
        _this.count = 0;
        _this.position = position;
        return _this;
    }
    Projectile.prototype.update = function (state) {
        this.count += 1;
        if (this.count == 2) {
            this.frame = (this.frame + 1) % this.frame_amount;
            this.count = 0;
        }
        this.position.add(this.velocity);
    };
    return Projectile;
}(Entity));



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelPopulator; });


var LevelPopulator = (function () {
    function LevelPopulator() {
        this.level = 0;
        this.populations = [
            function () {
                return [
                    new __WEBPACK_IMPORTED_MODULE_1__entities__["a" /* Player */](new __WEBPACK_IMPORTED_MODULE_0__vector2__["a" /* Vector2 */](128, 128)),
                ];
            },
            function () {
                return [
                    new __WEBPACK_IMPORTED_MODULE_1__entities__["a" /* Player */](new __WEBPACK_IMPORTED_MODULE_0__vector2__["a" /* Vector2 */](128, 128)),
                    new __WEBPACK_IMPORTED_MODULE_1__entities__["b" /* Enemy */](new __WEBPACK_IMPORTED_MODULE_0__vector2__["a" /* Vector2 */](128, 128)),
                    new __WEBPACK_IMPORTED_MODULE_1__entities__["b" /* Enemy */](new __WEBPACK_IMPORTED_MODULE_0__vector2__["a" /* Vector2 */](128, 128)),
                    new __WEBPACK_IMPORTED_MODULE_1__entities__["b" /* Enemy */](new __WEBPACK_IMPORTED_MODULE_0__vector2__["a" /* Vector2 */](128, 128)),
                ];
            },
            function () {
                return [
                    new __WEBPACK_IMPORTED_MODULE_1__entities__["a" /* Player */](new __WEBPACK_IMPORTED_MODULE_0__vector2__["a" /* Vector2 */](128, 128)),
                    new __WEBPACK_IMPORTED_MODULE_1__entities__["b" /* Enemy */](new __WEBPACK_IMPORTED_MODULE_0__vector2__["a" /* Vector2 */](128, 128)),
                    new __WEBPACK_IMPORTED_MODULE_1__entities__["c" /* Projectile */](new __WEBPACK_IMPORTED_MODULE_0__vector2__["a" /* Vector2 */](128, 128)),
                    new __WEBPACK_IMPORTED_MODULE_1__entities__["c" /* Projectile */](new __WEBPACK_IMPORTED_MODULE_0__vector2__["a" /* Vector2 */](128, 128)),
                ];
            },
        ];
    }
    LevelPopulator.prototype.next = function () {
        if (this.populations.length == 0) {
            console.log("There aren't any populations from which to draw");
            return [];
        }
        var return_value = this.populations[this.level]();
        this.level = (this.level + 1) % this.populations.length;
        return return_value;
    };
    return LevelPopulator;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Visitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Some; });
/* unused harmony export None */
var Visitor = (function () {
    function Visitor() {
    }
    Visitor.prototype.on_some = function (value) {
        return "Visit on Some object: " + JSON.stringify(value);
    };
    Visitor.prototype.on_none = function () {
        return "Visit on None object";
    };
    return Visitor;
}());

var Some = (function () {
    function Some(value) {
        this.value = value;
    }
    Some.prototype.visit = function (visitor) {
        return visitor.on_some(this.value);
    };
    return Some;
}());

var None = (function () {
    function None() {
    }
    None.prototype.visit = function (visitor) {
        return visitor.on_none();
    };
    return None;
}());



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector2__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__(1);


var Application = (function () {
    function Application() {
        this.state = new __WEBPACK_IMPORTED_MODULE_1__state__["a" /* State */]();
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext("2d");
        this.context.imageSmoothingEnabled = false;
        this.context.scale(3, 3);
    }
    Application.get_instance = function () {
        if (Application.instance == null) {
            Application.instance = new Application();
        }
        return Application.instance;
    };
    Application.prototype.update = function () {
        for (var _i = 0, _a = this.state.entities; _i < _a.length; _i++) {
            var entity = _a[_i];
            entity.update(this.state);
        }
        this.state.entities = this.state.entities.filter(function (entity) {
            return entity.position.dist(new __WEBPACK_IMPORTED_MODULE_0__vector2__["a" /* Vector2 */]()) < 320;
        });
        if (this.state.entities.length == 0) {
            this.state.entities = this.state.populator.next();
        }
        this.draw();
    };
    Application.prototype.draw = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (var _i = 0, _a = this.state.entities; _i < _a.length; _i++) {
            var entity = _a[_i];
            entity.draw(this.context);
        }
    };
    return Application;
}());
document.body.onload = function () {
    var app = Application.get_instance();
    function main_loop() {
        app.update();
        requestAnimationFrame(main_loop);
    }
    main_loop();
};


/***/ })
/******/ ]);