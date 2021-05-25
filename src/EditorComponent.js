import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";


const EditorComponent = () => {

    const onChange = (newValue) => {
        // console.log("change", newValue)
    }
    return ( 
        <div className="editor">
            <AceEditor
                mode="java"
                theme="github"
                onChange = {onChange}
                name="blahblah"
                editorProps={{ $blockScrolling: true}}
            />
        </div>
     );
}
 
export default EditorComponent;