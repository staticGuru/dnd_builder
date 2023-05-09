import React, { useEffect, useState, useRef, useParams } from "react";
import axios from "axios";
import grapesjs from "grapesjs";
import { Link } from "react-router-dom";
import plugin from "grapesjs-blocks-basic";
import gsCustome from "grapesjs-custom-code";
import gsTap from "grapesjs-tabs";
import "grapesjs/dist/css/grapes.min.css";
import Page1 from "./Page1";
import Page2 from "./Page2";

const Editor = () => {
  const [editor, setEditor] = useState(null);
  const [page, setPage] = useState("");
  const ref = useRef(null);
  const [pageManager, setPageManager] = useState(null);
  const [selectedPageIdx, setSelectedPageIdx] = useState(0);

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [plugin, gsCustome, gsTap],
      height: "700px",
      width: "100%",
      plugins0pts: {
        [plugin]: {},
      },
      blockManager: {
        appendTo: "#block",
      },
      styleManager: {
        appendTo: "#styles-container",
      },
      layerManager: {
        appendTo: "#layers-container",
      },
      traitManager: {
        appendTo: "#trait-container",
      },
      pageManager: {
        pages: [
          // {
          //     styles: `.my-class { color: red }`, // or a JSON of styles
          //     component: Page1, // or a JSON of components
          // }
        ],
      },
      panels: {
        defaults: [
          {
            // id: "basic-actions",
            // el: ".panel_basic-actions",
            buttons: [
              {
                id: "visibility",
                active: true,
                className: "btn-toggle-borders",
                label: "<i class='bi bi-border'></i>",
                command: "sw-visibility",
              },
              {
                id: "device-desktop",
                label: "<i class='bi bi-laptop'></i>",
                command: "set-device-desktop",
                active: true,
                togglable: false,
              },
              {
                id: "device-mobile",
                label: "<i class='bi bi-phone'></i>",
                command: "set-device-mobile",
              },
            ],
          },
        ],
      },
      deviceManager: {
        devices: [
          {
            name: "Desktop",
            width: "",
          },
          {
            name: "Mobile",
            width: "320px",
            widthMedia: "480px",
          },
        ],
      },
      // domComponents: {
      //     // Define the attachment component
      //     components: [
      //       {
      //         id: 'attachment',
      //         content: '<div class="attachment-component"><i class="fa fa-paperclip"></i><span>Document</span></div>',
      //         draggable: true,
      //         droppable: true,
      //         attributes: { class: 'attachment' },
      //       },
      //     ],
      //     // Define the attachment drop zone
      //     wrapper: {
      //       id: 'attachment-drop-zone',
      //       attributes: { class: 'attachment-drop-zone' },
      //       components: '<div class="dropzone-label">Drop attachments here</div>',
      //       style: { border: '1px dashed gray', padding: '10px', 'text-align': 'center' },
      //       droppable: true,
      //       // Handle dropped attachments
      //       onDrop({ e, model }) {
      //         // Get the attachment component
      //         const attachmentComponent = model.components().getById('attachment');
      //         if (attachmentComponent) {
      //           // Create a new attachment element with the same icon and label as the component
      //           const attachmentEl = document.createElement('div');
      //           attachmentEl.classList.add('attachment-component');
      //           attachmentEl.innerHTML = '<i class="fa fa-paperclip"></i><span>Document</span>';

      //           // Append the new attachment element to the drop zone
      //           e.append(attachmentEl);
      //         }
      //       },
      //     },
      //   },
    });
    // editor.BlockManager.add('attachment', {
    //     label: 'Document',
    //     content: `
    //       <div>
    //         <input type="file" name="attachment"/>
    //         <div class="attachment-preview"></div>
    //       </div>
    //     `,
    //     category: 'Basic',
    //     attributes: {
    //       'data-name': 'Document',
    //     },
    //     init() {
    //       this.onInputChange = this.onInputChange.bind(this);
    //     },
    //     onInputChange(event) {
    //       const file = event.target.files[0];
    //       const reader = new FileReader();
    //       const previewEl = this.getEl().querySelector('.attachment-preview');
    //   console.log("fillllee",file)
    //       reader.onload = (e) => {
    //         const image = document.createElement('img');
    //         image.src = e.target.result;
    //         previewEl.innerHTML = '';
    //         previewEl.appendChild(image);
    //         const filename = document.createElement('div');
    //         filename.textContent = file.name;
    //         previewEl.appendChild(filename);
    //       };

    //       reader.readAsDataURL(file);
    //     },
    //     afterRender() {
    //       const inputEl = this.getEl().querySelector('input[name="attachment"]');
    //       inputEl.addEventListener('change', this.onInputChange);
    //     },
    //     onDestroy() {
    //       const inputEl = this.getEl().querySelector('input[name="attachment"]');
    //       inputEl.removeEventListener('change', this.onInputChange);
    //     },
    //   });

    editor.BlockManager.add("attachment", {
      label: "Document",
      category: "Basic",
      attributes: {
        class: "fa fa-paperclip",
        title: "AttDachment",
      },
      content:
        '<div class="attachment-component"><input type="file" name="attachment" id="attachment-123"/></div>',
      render: ({ el }) => {
        // const attachmentEl = el.querySelector(".attachment-component");
        const attachmentEl = el;
        console.log("attachmentEl", attachmentEl, el);
        //   attachmentEl?.draggable = true;
          attachmentEl.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text', 'attachment');
          });
      },
    });
    editor.on("load", () => {
      const attachmentInput = document.getElementById("attachment-123");
      console.log("attachmentdd", attachmentInput);
      attachmentInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        console.log("filesss", file);
        // Save the file to your application state or backend here
      });
    });
    editor.Panels.addPanel({
      id: "options",
      el: ".options-container",
      visible: true,
      buttons: [
        {
          id: "attachment",
          className: "btn-attachment",
          label: "Document",
          command: "show-attachment",
        },
      ],
    });

    editor.Commands.add("show-attachment", {
      run(editor, sender) {
        editor.BlockManager.get("attachment")
          .render()
          .appendTo(editor.getSelected());
      },
    });

    setEditor(editor);
    setPageManager(editor.Pages);
  }, []);

  const increasePage = () => {
    console.log("selectedPageIdx", selectedPageIdx);
    setSelectedPageIdx(selectedPageIdx + 1);
  };
  // <button className="btn btn-success" onClick={() => {
  //     // const mainPage = pageManager.getMain();
  //     // pageManager.select(mainPage["id"]);
  //     // let arrPages = [];
  //     const listOfPages = pageManager.getAll();
  //     var lenPages = listOfPages.length
  //     var htmlContent = []
  //     var cssContent = []
  //     for (let idx = 0; idx <= lenPages; idx++) {
  //         pageManager.select(listOfPages[idx])
  //         htmlContent.push(editor.getHtml())
  //         cssContent.push(editor.getCss())

  //     }

  //     console.log(htmlContent)
  //     console.log(cssContent)
  //     // console.log(listOfPages[0])

  //     // pageManager.select(listOfPages[0])
  //     // console.log(editor.getHtml())
  //     // console.log(editor.getCss())
  //     // localStorage.setItem("arrPages", JSON.stringify(listOfPages));

  //     // console.log(lenPages)

  //     // for (var i=3; i<=lenPages; i++) {
  //     //     pageManager.remove(listOfPages[i])
  //     // }
  //     // localStorage.arrayOfPages=JSON.stringify(arrayOfPages);
  //     // console.log(typeof arrPages)
  //     // let firstPage = localStorage.getItem("arrPages")
  //     // console.log(firstPage)
  //     // var storedpageManager=JSON.parse(localStorage.pageManager);
  // }}> Save Me </button>

  return (
    <div className="container mt-5 p-5 shadow back">
      <div className="row">
        <div className="col-lg-5">
          <h4 className="mt-5 font-header"> Building Template </h4>
          <p className="content">Build your template by using tools </p>
        </div>

        <div className="col-lg-4">
          <button className="createbutton">Save As</button>
          <button
            className="savebutton m-1"
            // onClick={() => {
            //     let preview = document.getElementById("preview");
            //     if (localStorage.getItem("previewHtml")) {
            //         localStorage.removeItem("previewHtml");
            //         preview.innerHTML = "";
            //     }
            //     if (localStorage.getItem("previewCss")) {
            //         localStorage.removeItem("previewCss");
            //     }
            //     preview.innerHTML += editor.getHtml();

            //     localStorage.setItem("previewHtml", editor.getHtml());
            //     localStorage.setItem("previewCss", editor.getCss());
            // }}

            onClick={() => {
              const mainPage = pageManager.getMain();
              pageManager.select(mainPage["id"]);
              // let arrPages = [];
              // const listOfPages = pageManager.getAll();
              // console.log(listOfPages[0])
              // pageManager.select(listOfPages[0])
              // console.log(editor.getHtml())
              // console.log(editor.getCss())
              // localStorage.setItem("arrPages", JSON.stringify(listOfPages));
              // var lenPages = listOfPages.length
              // console.log(lenPages)

              const listOfPages = pageManager.getAll();
              var lenPages = listOfPages.length;
              // pageList = []
              // for (let i = 1; i <= lenPages; i++) {
              //     pageList.push(`Page ${i}`)
              // }
              // var htmlContent = []
              // var cssContent = []
              // for (var i=1; i<=lenPages; i++) {
              //     pageManager.remove(listOfPages[i])
              // }
              for (let idx = 0; idx <= lenPages; idx++) {
                pageManager.select(listOfPages[idx]);
                localStorage.setItem(`htmlPage${idx}`, editor.getHtml());
                localStorage.setItem(`cssPage${idx}`, editor.getCss());
              }
            }}
          >
            Save
          </button>
          <button className="cancelbutton">Delete</button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <div
            id="navbar"
            className="sidenav d-flex flex-column overflow-scroll mt-3"
          >
            <nav className="navbar navbar-light"></nav>
            <div className="my-2 d-flex flex-column">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm mx-2  text-white"
                onClick={() => {
                  increasePage();
                  const newPage = pageManager.add({});
                  pageManager.select(newPage);
                  var listOfPages = pageManager.getAll();
                  var lenPages = listOfPages.length;
                  localStorage.setItem("lenPages", lenPages);
                }}
              >
                <i className="bi bi-file-earmark-plus">Add page </i>
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm mx-2  text-white"
                onClick={() => {
                  const mainPage = pageManager.getMain();
                  pageManager.select(mainPage["id"]);
                }}
              >
                Go to Page1
              </button>

              <button
                type="button"
                className="btn btn-outline-secondary btn-sm mx-2  text-white"
                onClick={() => {
                  const selectedPage = pageManager.getSelected();
                  const arrayOfPages = pageManager.getAll();
                  let selectedIdx = arrayOfPages.findIndex(
                    (page) => page.cid === selectedPage.cid
                  );
                  console.log(selectedIdx);
                  console.log(selectedPage);
                  console.log(arrayOfPages);
                  if (selectedIdx + 1 < arrayOfPages.length) {
                    pageManager.select(
                      pageManager.get(arrayOfPages[selectedIdx + 1]["id"])
                    );
                  }
                }}
              >
                Next
              </button>
            </div>
            <div>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="block-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#block"
                    aria-selected="true"
                    aria-controls="block"
                  >
                    <i className="fa fa-cubes"></i>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="trait-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#trait"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    aria-controls="trait"
                  >
                    <i className="fa fa-cog"></i>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="style-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#style"
                    type="button"
                    role="tab"
                    aria-selected="false"
                    aria-controls="style"
                  >
                    <i className="fa fa-paint-brush"></i>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="layer-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#layer"
                    type="button"
                    role="tab"
                    aria-controls="layer"
                    aria-selected="false"
                  >
                    <i class="fa fa-tasks"></i>
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane  fade show active"
                  id="block"
                  role="tabpanel"
                  aria-labelledby="block-tab"
                >
                  <div id="blocks"></div>
                </div>
                <div
                  className="tab-pane fade"
                  id="trait"
                  role="tabpanel"
                  aria-labelledby="trait-tab"
                >
                  <div id="trait-container"></div>
                </div>
                <div
                  className="tab-pane fade"
                  id="style"
                  role="tabpanel"
                  aria-labelledby="style-tab"
                >
                  <div id="styles-container"></div>
                </div>
                <div
                  class="tab-pane fade"
                  id="layer"
                  role="tabpanel"
                  aria-labelledby="layer-tab"
                >
                  <div id="layers-container"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="main-content">
            <nav className="navbar navbar-light">
              <div className="container-fluid">
                <div className="panel_devices"></div>
                <div className="panel_basic-actions"></div>
              </div>
            </nav>
            <div className="App">
              <div id="editor" ref={ref}></div>
              <div id="preview"></div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 RightSide_NavBar">
          <ul className="list-group-pages text-white"></ul>
        </div>
      </div>
    </div>
  );
};
export default Editor;
