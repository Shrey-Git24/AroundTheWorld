import ReactQuill from "react-quill";

export default function Editor({value,onChange}) {
  const modules = {
    toolbar: [
      [{ 'font': [] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{"size":[]}],
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
      [{ 'align': [] }],
      ['image', 'video'],
      
    ],
    history: [
      [{delay: 2000}],
      [{maxStack: 500}],
      [{userOnly: true}],
    ],
    
  };
  return (
    <div className="content">
    <ReactQuill className="container"
      value={value}
      theme={'snow'}
      onChange={onChange}
      modules={modules} />
    </div>
  );
}