import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

const placeHolderText = `
# H1
## H2
[title](https://www.example.com)
\`code\`
\`\`\`
{
"firstName": "John",
"lastName": "Smith",
"age": 25
}
\`\`\`

- First item
- Second item
- Third item

> blockquote

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

**bold text**
`;
function App() {
  const [text, setText] = useState(placeHolderText);

  marked.setOptions({ breaks: true });

  return (
    <div className="App">
      <textarea
        className="editor"
        id="editor"
        onChange={(event) => {
          setText(event.target.value);
        }}
        value={text}
      ></textarea>
      <div
        id="preview"
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      ></div>
    </div>
  );
}

export default App;
