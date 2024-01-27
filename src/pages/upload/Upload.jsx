import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";
import "../../styles/uploadStyle/upload.scss";
import SideBar from "../../components/sideBar/SideBar";
import Navbar from "../../components/navbar/Navbar";
import { MdOutlineFileUpload } from "react-icons/md";
import excelIcon from "../../../public/image/excel-icon.png";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isMediaUploading, setIsMediaUploading] = useState(false);
  const [fileTags, setFileTags] = useState([]);

  const fileInputRef = useRef(null);

  useEffect(() => {
    const storedFiles = localStorage.getItem("uploadedFiles");
    if (storedFiles) {
      setUploadedFiles(JSON.parse(storedFiles));
    }
  }, []);

  const handleMediaUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("upload_preset", "OpeninApp");
      formData.append("cloud_name", "dmldp9xj4");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dmldp9xj4/auto/upload",
        formData
      );

      setUploadedFiles((prevFiles) => [
        ...prevFiles,
        {
          src: response.data.secure_url,
          prefix: "prefixsample",
          tags: [],
        },
      ]);

      localStorage.setItem(
        "uploadedFiles",
        JSON.stringify([
          ...uploadedFiles,
          {
            src: response.data.secure_url,
            prefix: "prefixsample",
            tags: [],
          },
        ])
      );

      setSelectedFile(null);
      fileInputRef.current.value = "";
    } catch (error) {
      console.error(error);
    } finally {
      setIsMediaUploading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    fileInputRef.current.value = "";
  };

  const submitFileHandler = async (e) => {
    e.preventDefault();
    setIsMediaUploading(true);
    handleMediaUpload(selectedFile);
  };

  const selectHandler = (fileIndex, e) => {
    const selectedValue = e.target.value;
    if (selectedValue !== "Select Tags") {
      setFileTags((prevTags) => {
        const updatedTags = [...prevTags];
        updatedTags[fileIndex] = [...(updatedTags[fileIndex] || []), selectedValue];
        return updatedTags;
      });
    }
  };

  const removeTag = (fileIndex, tagIndex) => {
    setFileTags((prevTags) => {
      const updatedTags = [...prevTags];
      updatedTags[fileIndex] = updatedTags[fileIndex].filter((_, idx) => idx !== tagIndex);
      return updatedTags;
    });
  };

  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <Navbar />
      <div className="uploaded_file_map_data_container">
        <div
          className={
            !uploadedFiles.length
              ? "without_file_input_file_container"
              : "input_file_container"
          }
        >
          <form className="upload_file_form" onSubmit={submitFileHandler}>
            <div
              style={{
                position: "absolute",
                marginTop: "-5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <img
                src={excelIcon}
                alt="excelIcon"
                className="excel_icon"
                style={{
                  marginLeft: selectedFile ? "7rem" : "5rem",
                }}
              />
              <div>
                {selectedFile ? (
                  <span className="file_type">
                    {selectedFile.name} {selectedFile.type}
                    <div className="remove_button" onClick={() => setSelectedFile("")}>
                      Remove
                    </div>
                  </span>
                ) : (
                  <div>
                    drop your excel here or{" "}
                    <span id="browse" onClick={() => fileInputRef.current.click()}>
                      browse
                    </span>
                  </div>
                )}
              </div>
            </div>
            <label htmlFor="file"></label>
            <input
              type="file"
              id="file"
              accept=".csv"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <button type="submit" disabled={!selectedFile}>
              {!isMediaUploading ? (
                <div className="uploaded_icon_text_container">
                  <MdOutlineFileUpload />
                  <span>Upload</span>
                </div>
              ) : (
                <Spinner id="spinner" />
              )}
            </button>
          </form>
        </div>
        <div id="upload_heading_text">
          {uploadedFiles.length ? "Uploads" : null}
        </div>
        {uploadedFiles.length ? (
          <div className="mapping_file_container">
            <div className="map_uploaded_file_container">
              <div id="map_data_heading">
                <span>Sl No.</span>
                <span>Link</span>
                <span>Prefix</span>
                <span>Add Tags</span>
                <span>Selected Tags</span>
              </div>
              {uploadedFiles.map((fileObj, index) => (
                <div className="file_link_tag_container" key={fileObj.src}>
                  <span>{index + 1}</span>
                  <div className="uploaded_file_link">
                    <a href={fileObj.src}>{fileObj.src}</a>
                  </div>
                  <span className="prefix_text">{fileObj.prefix}</span>
                  <select
                    className="drop_down"
                    value={fileTags[index] ? fileTags[index] : "Select Tags"}
                    onChange={(e) => selectHandler(index, e)}
                  >
                    <option>Select Tags</option>
                    <option value="Tag1">Tag1</option>
                    <option value="Tag2">Tag2</option>
                    <option value="Tag3">Tag3</option>
                    <option value="Tag4">Tag4</option>
                  </select>
                  <span>
                    {fileTags[index] &&
                      fileTags[index].map((item, tagIndex) => (
                        <span key={item} style={{ padding: "2px" }}>
                          <span id="selected_tag_design">
                            {item}
                            <span
                              className="remove_tag_button"
                              onClick={() => removeTag(index, tagIndex)}
                            >
                              x
                            </span>
                          </span>
                        </span>
                      ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Upload;
