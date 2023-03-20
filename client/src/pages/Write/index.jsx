import Layout from "../../components/Layout";
// import Quote from '@editorjs/quote';
import EditorJS from '@editorjs/editorjs';
import Header from "@editorjs/header";

const Write = () => {

    const editor = new EditorJS({
        holder: 'editorjs',
        tools: {
            header: {
                class: Header,
                inlineToolbar: ['link'],
                config: {
                    placeholder: 'Header'
                },
                shortcut: 'CMD+SHIFT+H'
            }
        }
    });

    return (
        <Layout>
            <div id="editorjs" style={{fontSize: "1.2rem"}}>

            </div>
        </Layout>
    )
}
export default Write;