/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect, InputHTMLAttributes, forwardRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'

import FormFieldWrapper from '@@/components/Form/FormFieldWrapper'

import { imageFileField, inputLabel, isNotImage, imagePreview, icon } from './styles'

type ImageFileFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  errorMessage?: string
}

const ImageFileField = forwardRef<HTMLInputElement, ImageFileFieldProps>(
  ({ label, errorMessage, onChange, ...inputProps }, ref) => {
    const [imageFile, setImageFile] = useState<File>();
    const [imagePreviewSrc, setImagePreviewSrc] = useState<string>();
    useEffect(() => {
      if (imageFile) {
        const newUrl = URL.createObjectURL(imageFile);

        if (newUrl !== imagePreviewSrc) {
          setImagePreviewSrc(newUrl);
        }
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imageFile]);

    return (
      <FormFieldWrapper label={label} errorMessage={errorMessage}>
        <label htmlFor="imageFileField" css={inputLabel(!!imageFile)}>
          <span css={isNotImage}><FontAwesomeIcon icon={faCircleUser} size="2x" /></span>
          {imageFile && <img src={imagePreviewSrc} css={imagePreview} alt="icon" />}
        </label>
        <span css={icon}><FontAwesomeIcon icon={faPenToSquare} /></span>
        <input
          id="imageFileField"
          type="file"
          accept="image/*"
          css={imageFileField(!!errorMessage, inputProps.readOnly)}
          ref={ref}
          {...inputProps}
          onChange={(e) => {
            setImageFile(e.target.files?.[0]);
          }}
        />
      </FormFieldWrapper>
    )
  }
)

export default ImageFileField
