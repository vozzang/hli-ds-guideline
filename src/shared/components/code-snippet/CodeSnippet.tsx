import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);

function CodeSnippet(props: any) {
  return (
    <SyntaxHighlighter language="jsx" style={prism}>
      {props.codeString}
    </SyntaxHighlighter>
  );
}

export default CodeSnippet;