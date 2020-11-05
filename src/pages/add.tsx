import { Field, Form, Formik, useFormik } from "formik"
import React, { useEffect, useRef, useState } from "react"
import Header from "../components/header"
import { Lolly } from "../components/Lolly"
import "../styles/Add.css"
import * as Yup from "yup"
import { useMutation } from "@apollo/client"
import Result from "../components/result"
import { ADD_LOLLY } from "../components/gql"

const DisplayingErrorMessagesSchema = Yup.object().shape({
  reciever: Yup.string()
    .min(3, "Name must be atleast 3 characters long")
    .max(50, "Name must not exceed 50 characters")
    .required("Required"),
  sender: Yup.string()
    .required("Required")
    .min(2, "Name must be atleast 3 characters long")
    .max(50, "Name must not exceed 50 characters"),
  message: Yup.string()
    .required("Required")
    .min(5, "Message must be at least 5 characters long"),
})

const Add = () => {
  const [color1, setcolor1] = useState("#d52358")
  const [color2, setcolor2] = useState("#e95946")
  const [color3, setcolor3] = useState("#deaa43")
  const [addLolly, { data }] = useMutation(ADD_LOLLY)

  const formik = useFormik({
    initialValues: {
      reciever: "",
      sender: "",
      message: "",
    },
    validationSchema: DisplayingErrorMessagesSchema,
    onSubmit: (values, { resetForm }) => {
      addLolly({
        variables: {
          color1,
          color2,
          color3,
          reciever: values.reciever,
          sender: values.sender,
          message: values.message,
        },
      })

      resetForm({
        values: {
          reciever: "",
          sender: "",
          message: "",
        },
      })
    },
  })
  // useEffect(() => {
  //   async function runHook() {
  //     const response = await fetch(
  //       "https://api.netlify.com/build_hooks/5f9a99467867c005d354dcb7",
  //       {
  //         method: "POST",
  //       }
  //     )
  //   }
  //   runHook()
  // }, [data])

  return (
    <div className="create">
      <Header />

      <div className="lollyFormDiv">
        <div>
          <Lolly top={color1} middle={color2} bottom={color3} />
        </div>
        {!data ? (
          <>
            {" "}
            <div className="lollyFlavourDiv">
              <label htmlFor="flavourTop" className="colorPickerLabel">
                <input
                  type="color"
                  value={color1}
                  className="colorPicker"
                  name="flavourTop"
                  id="flavourTop"
                  onChange={e => {
                    setcolor1(e.target.value)
                  }}
                />
              </label>

              <label htmlFor="flavourTop" className="colorPickerLabel">
                <input
                  type="color"
                  value={color2}
                  className="colorPicker"
                  name="flavourTop"
                  id="flavourTop"
                  onChange={e => {
                    setcolor2(e.target.value)
                  }}
                />
              </label>
              <label htmlFor="flavourTop" className="colorPickerLabel">
                <input
                  type="color"
                  value={color3}
                  className="colorPicker"
                  name="flavourTop"
                  id="flavourTop"
                  onChange={e => {
                    setcolor3(e.target.value)
                  }}
                />
              </label>
            </div>
            <form className="form-container" onSubmit={formik.handleSubmit}>
              <label htmlFor="firstName">To</label>
              <br />{" "}
              <input
                id="reciever"
                name="reciever"
                type="text"
                placeholder="A lolly for..."
                onChange={formik.handleChange}
                value={formik.values.reciever}
              />
              {formik.errors.reciever ? (
                <div className="error">{formik.errors.reciever}</div>
              ) : null}
              <br /> <label htmlFor="message">Message</label>
              <br />{" "}
              <textarea
                id="message"
                name="message"
                placeholder="Say something nice..."
                onChange={formik.handleChange}
                value={formik.values.message}
              />
              <br />
              {formik.errors.message ? (
                <div className="error">{formik.errors.message}</div>
              ) : null}
              <label htmlFor="sender">From</label>
              <br />
              <input
                id="sender"
                name="sender"
                type="sender"
                onChange={formik.handleChange}
                value={formik.values.sender}
                placeholder="From your friend.."
              />
              {formik.errors.sender ? (
                <div className="error">{formik.errors.sender}</div>
              ) : null}
              <div className="space-mob"></div>
              <button type="submit">Freeze this lolly and get a link</button>
            </form>
          </>
        ) : (
          <Result
            link={data?.addLolly?.link}
            reciever={data?.addLolly?.reciever}
            sender={data?.addLolly?.sender}
            message={data?.addLolly?.message}
          />
        )}
      </div>
    </div>
  )
}
export default Add
