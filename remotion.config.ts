import {Config} from 'remotion';
import {webpackOverride} from './src/webpack-override';

Config.overrideWebpackConfig(webpackOverride);
Config.setImageFormat('png');
Config.setPixelFormat('yuva444p10le');
Config.setCodec('prores');
Config.setProResProfile('4444-xq');
