import { useState, useEffect, InputHTMLAttributes, forwardRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'

import FormFieldWrapper from '@@/features/form/components/FormFieldWrapper'

import styles from './styles'

type ImageFileFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

const ImageFileField = forwardRef<HTMLInputElement, ImageFileFieldProps>(
  ({ label, error, onChange, ...inputProps }, ref) => {
    const [imageFile, setImageFile] = useState<File>()
    const [imagePreviewSrc, setImagePreviewSrc] = useState<string>()
    useEffect(() => {
      if (imageFile) {
        const newUrl = URL.createObjectURL(imageFile)

        if (newUrl !== imagePreviewSrc) {
          setImagePreviewSrc(newUrl)
        }
      }
    }, [imageFile])

    return (
      <FormFieldWrapper label={label} error={error}>
        <label htmlFor="imageFileField" css={styles.inputLabel(!!imageFile)}>
          <span css={styles.isNotImage}>
            <FontAwesomeIcon icon={faCircleUser} size="2x" />
          </span>
          {imageFile && <img src={imagePreviewSrc} css={styles.imagePreview} alt="icon" />}
        </label>
        <span css={styles.icon}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </span>
        <input
          id="imageFileField"
          type="file"
          accept="image/*"
          css={styles.imageFileField(!!error, inputProps.readOnly)}
          ref={ref}
          {...inputProps}
          onChange={(e) => {
            setImageFile(e.target.files?.[0])
          }}
        />
      </FormFieldWrapper>
    )
  },
)

export default ImageFileField
