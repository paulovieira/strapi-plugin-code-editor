// language modules developed for Codemirror6

import {cpp} from '@codemirror/lang-cpp';
import {css} from '@codemirror/lang-css';
import {html} from '@codemirror/lang-html';
import {java} from '@codemirror/lang-java';
import {javascript} from '@codemirror/lang-javascript';
import {json} from '@codemirror/lang-json';
import {markdown} from '@codemirror/lang-markdown';
import {php} from '@codemirror/lang-php';
import {python} from '@codemirror/lang-python';
import {rust} from '@codemirror/lang-rust';
import {sql} from '@codemirror/lang-sql';
import {wast} from '@codemirror/lang-wast';
import {xml} from '@codemirror/lang-xml';

let languages = {
  'cpp': cpp(),
  'css': css(),
  'html': html(),
  'java': java(),
  'javascript': javascript(),
  'json': json(),
  'markdown': markdown(),
  'php': php(),
  'python': python(),
  'rust': rust(),
  'sql': sql(),  
  'wast': wast(),
  'xml': xml(),
}

export default languages;