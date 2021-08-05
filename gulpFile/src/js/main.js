// import 文を使って sub.js ファイルを読み込む。
import { hello } from "./sub";

/** Import Page Module */ // パスの昇順で記載する
import {copyUrlAction} from './module/copy_url';

// sub.jsに定義されたJavaScriptを実行する。
// hello();
copyUrlAction('.btn');