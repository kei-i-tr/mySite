/** Import Page Module */ // パスの昇順で記載する
import 'jquery';
import 'velocity-animate';

import {copyUrlAction} from './module/copy_url';
import {navToggle} from './module/nav_toggle';


// target page only
copyUrlAction('.copyBtn');

let spNavToggle = new navToggle();
spNavToggle.init();