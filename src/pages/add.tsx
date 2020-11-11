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
  to: Yup.string()
    .min(3, "Name must be atleast 3 characters long")
    .max(50, "Name must not exceed 50 characters")
    .required("Required"),
  from: Yup.string()
    .required("Required")
    .min(2, "Name must be atleast 3 characters long")
    .max(50, "Name must not exceed 50 characters"),
  message: Yup.string()
    .required("Required")
    .min(5, "Message must be at least 5 characters long"),
})

const Add = () => {
  const [topFlavor, settopFlavor] = useState("#d52358")
  const [middleFlavor, setmiddleFlavor] = useState("#e95946")
  const [bottomFlavor, setbottomFlavor] = useState("#deaa43")
  const [addLolly, { data }] = useMutation(ADD_LOLLY)

  const formik = useFormik({
    initialValues: {
      to: "",
      from: "",
      message: "",
    },
    validationSchema: DisplayingErrorMessagesSchema,
    onSubmit: (values, { resetForm }) => {
      addLolly({
        variables: {
          topFlavor,
          middleFlavor,
          bottomFlavor,
          to: values.to,
          from: values.from,
          message: values.message,
        },
      })

      resetForm({
        values: {
          to: "",
          from: "",
          message: "",
        },
      })
      fetch("https://api.netlify.com/build_hooks/5fac03d34e09380e164ff08b", {
        method: "POST",
      })
        .then(() => console.log("hook ran"))
        .catch(() => "hook err")
    },
  })

  return (
    <div className="create">
      <Header />

      <div className="vlform">
        <div>
          <Lolly top={topFlavor} middle={middleFlavor} bottom={bottomFlavor} />
        </div>
        {!data ? (
          <>
            {" "}
            <div className="vlflavor">
              <label htmlFor="flavourTop" className="colorPickerLabel">
                <input
                  type="color"
                  value={topFlavor}
                  className="colorPicker"
                  name="flavourTop"
                  id="flavourTop"
                  onChange={e => {
                    settopFlavor(e.target.value)
                  }}
                />
              </label>

              <label htmlFor="flavourTop" className="colorPickerLabel">
                <input
                  type="color"
                  value={middleFlavor}
                  className="colorPicker"
                  name="flavourTop"
                  id="flavourTop"
                  onChange={e => {
                    setmiddleFlavor(e.target.value)
                  }}
                />
              </label>
              <label htmlFor="flavourTop" className="colorPickerLabel">
                <input
                  type="color"
                  value={bottomFlavor}
                  className="colorPicker"
                  name="flavourTop"
                  id="flavourTop"
                  onChange={e => {
                    setbottomFlavor(e.target.value)
                  }}
                />
              </label>
            </div>
            <form className="form-container" onSubmit={formik.handleSubmit}>
              <label htmlFor="firstName">To</label>
              <br />{" "}
              <input
                id="to"
                name="to"
                type="text"
                placeholder="A lolly for..."
                onChange={formik.handleChange}
                value={formik.values.to}
              />
              {formik.errors.to ? (
                <div className="error">{formik.errors.to}</div>
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
              <label htmlFor="from">From</label>
              <br />
              <input
                id="from"
                name="from"
                type="from"
                onChange={formik.handleChange}
                value={formik.values.from}
                placeholder="From your friend.."
              />
              {formik.errors.from ? (
                <div className="error">{formik.errors.from}</div>
              ) : null}
              <div className="space-mob"></div>
              <button type="submit">Freeze this lolly and get a link</button>
            </form>
          </>
        ) : (
          <Result
            link={data?.addLolly?.link}
            to={data?.addLolly?.to}
            from={data?.addLolly?.from}
            message={data?.addLolly?.message}
          />
        )}
      </div>
    </div>
  )
}
export default Add
