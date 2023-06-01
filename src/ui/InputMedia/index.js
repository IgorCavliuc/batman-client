import Compressor from "compressorjs";

import "./style/index.scss";
import Atach from "../../svg/atach.tsx";

const InputMedia = ({ field, form, valuesName }) => {
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 0) {
      const promises = files.map(
        (file) =>
          new Promise((resolve, reject) => {
            new Compressor(file, {
              quality: 0.3,
              success: (compressedFile) => {
                convertBase64(compressedFile).then((base64) => {
                  resolve(base64);
                });
              },
              error: (error) => {
                reject(error);
              },
            });
          })
      );

      Promise.all(promises)
        .then((base64Array) => {
          const updatedArray = [...base64Array, ...field.value];
          form.setFieldValue(field.name, updatedArray.slice(0, 10));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const changeRemove = (files) => {
    form.setFieldValue(
      field.name,
      field.value?.filter((item) => item !== files)
    );
  };

  return (
    <div className="agent-store--ui-input-media-wallpaper">
      <div className="agent-store--ui-input-media">
        <h4>
          Import a photo image{" "}
          <span>
            {(Array.isArray(field?.value) ? field.value : [])?.length} / 10
          </span>
        </h4>
        <p>
          *Attention! You need to insert from 1 to 10 images. The image format
          is Png or Jpg. The file size must not exceed 10 MB
        </p>

        <div className="agent-store--ui-input-media-attachment">
          {(Array.isArray(field?.value) ? field.value : [])?.length < 10 ? (
            <div className="agent-store--ui-input-media__add-block">
              <input
                type="file"
                accept="image/*, .png, .jpg"
                onChange={handleChange}
                multiple
              />
              <Atach />
            </div>
          ) : null}

          <div className="agent-store-ui-input-media-list_input-block-img-list">
            {(Array.isArray(field?.value) ? field.value : []).map((item, i) => (
              <div
                key={i}
                className="agent-store-ui-input-media-list_input-block-img-list-block"
                onClick={() => changeRemove(item)}
              >
                <img src={item} alt="icon" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputMedia;
