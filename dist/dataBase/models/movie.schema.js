"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieModel = exports.MovieSchema = void 0;
const mongoose_1 = require("mongoose");
const constants_1 = require("../../constants");
exports.MovieSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    genre1: {
        type: String,
        required: true
    },
    genre2: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
}, { timestamps: true });
exports.MovieModel = mongoose_1.model(constants_1.TableNamesEnum.MOVIE, exports.MovieSchema);
//# sourceMappingURL=movie.schema.js.map