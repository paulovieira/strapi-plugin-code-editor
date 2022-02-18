import {html} from '@codemirror/lang-html';
import {css} from '@codemirror/lang-css';
import {markdown} from '@codemirror/lang-markdown';
import {json} from '@codemirror/lang-json';
// import {javascript} from '@codemirror/lang-javascript';
// import {sql} from '@codemirror/lang-sql';
// import {php} from '@codemirror/lang-php';
// import {rust} from '@codemirror/lang-rust';
// import {python} from '@codemirror/lang-python';
// import {java} from '@codemirror/lang-java';
// import {xml} from '@codemirror/lang-xml';
// import {wast} from '@codemirror/lang-wast';
// import {cpp} from '@codemirror/lang-cpp';

let languages = {
  'html': html(),
  'css': css(),
  'markdown': markdown(),
  'json': json(),
  // 'javascript': javascript(),
  // 'sql': sql(),
  // 'php': php(),
  // 'rust': rust(),
  // 'python': python(),
  // 'java': java(),
  // 'xml': xml(),
  // 'wast': wast(),
  // 'cpp': cpp()
}

export default languages;