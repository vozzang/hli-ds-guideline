import CodeSnippet from "../../../shared/components/code-snippet/CodeSnippet";

function ButtonExamples() {
  const codeString = `<Button
  href="#"
  onClick={() => {}}
  size="medium"
  tagName="a"
  type="primary"
>
  버튼입니다.
</Button>`;

  return (
    <>
      <div>
        <button>Primary</button>
      </div>

      <CodeSnippet codeString={codeString} />
    </>
  );
}

export default ButtonExamples;