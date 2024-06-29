import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { baseUrl } from '../BaseUrl/BaseUrl'
import "./product.css"

export default function Product() {
  const navigate = useNavigate()
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
  }
  const [tab, setTab] = useState(0)
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [color, setColor] = useState([])
  const [image, setImage] = useState("")
  const [image1, setImage1] = useState("")
  const [image2, setImage2] = useState("")
  const [image3, setImage3] = useState("")
  const [newData, setNewData] = useState({})
  const [calf, setCalf] = useState(false)
  const [gender, setGender] = useState("")
  console.log('newData', newData)

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewData({ ...newData, [name]: value })
  }
  const handleChangeCalf = () => {
    setCalf(!calf)
  }
  console.log('calf', calf)

  const getCategory = async () => {
    await axios.get(baseUrl + "category/get-category", config).then((res) => {
      console.log('res', res)
      setCategory(res?.data?.category);
      setNewData({ ...newData, c_id: res?.data?.category[0]?._id })
    }).catch((err) => {
      console.log('err', err)
    })
  }
  const getSubCategory = async () => {
    await axios.get(baseUrl + "subcategory/get-subcategory", config).then((res) => {
      console.log('res', res)
      setSubCategory(res?.data?.subcategory);
      // setNewData({ ...newData, s_c_id: res?.data?.subcategory[0]?.name })
    }).catch((err) => {
      console.log('err', err)
    })
  }
  const getColor = async () => {
    await axios.get(baseUrl + "color/get-color", config).then((res) => {
      console.log('res', res)
      setColor(res?.data?.color);
      // setNewData({ ...newData, s_c_id: res?.data?.color[0]?.name })
    }).catch((err) => {
      console.log('err', err)
    })
  }

  const handleSubmit = async () => {
    let dataAnimal = category.filter((v) => v?._id === newData?.c_id)
    let breed = subCategory.filter((v) => v?.categoryId?._id === dataAnimal[0]?._id)
    console.log('breed', breed)
    let body = {
      animalType: dataAnimal[0]?.name,
      categoryId: dataAnimal[0]?._id,
      breedType: newData?.s_c_id ?? breed[0]?.name,
      age: newData?.age,
      weight: newData?.weight,
      price: newData?.price,
      desc: newData?.description,
      color: newData?.color_id ?? "Black",
      city: newData?.city,
      state: newData?.state,
      phone: Number(newData?.seller_mobile) ?? null,
      milk: newData?.milk,
      isCalf: calf,
      lactation: newData?.lactation,
      calfAge: newData?.calf_age,
      calfGender: gender,
      frontPhoto: image,
      backPhoto: image1,
      generalReport: image2,
      lumpiCertificate: image3,
    }
    console.log('body', body)
    if (newData?.c_id === "64108765023f69996a4a4086") {
      if (
        newData?.c_id && newData?.s_c_id && newData?.age && newData?.weight && newData?.price && newData?.description && image1 && image2 && image3 && image
      ) {
        await axios.post(baseUrl + "product/add-product", body, config).then((res) => {
          console.log('res', res)
          toast.success(res?.data?.message)
          navigate("/allproduct")
        }).catch((err) => {
          console.log('err', err)
          toast.error(err?.response?.data.message)
        })
      } else {
        toast.error("Please fill all the fields")
      }

    } else {

      if (
        newData?.c_id && newData?.s_c_id && newData?.age && newData?.weight && newData?.price && newData?.description && image1 && image2 && image3 && image && newData?.milk && newData?.lactation
      ) {
        await axios.post(baseUrl + "product/add-product", body, config).then((res) => {
          console.log('res', res)
          toast.success(res?.data?.message)
          navigate("/allproduct")
        }).catch((err) => {
          console.log('err', err)
          toast.error(err?.response?.data.message)
        })
      } else {
        toast.error("Please fill all the fields")
      }

    }
  }


  const handleChangeImage = async (e) => {
    console.log('e.target', e.target)
    const formdata = new FormData()
    formdata.append("image", e.target.files[0])
    await axios.post(baseUrl + "image/upload-image", formdata, config).then((res) => {
      console.log('res', res)
      setImage(res?.data?.url)
    }).catch((err) => {
      console.log('err', err)
    })
  }
  const handleChangeImage1 = async (e) => {
    console.log('e.target', e.target)
    const formdata = new FormData()
    formdata.append("image", e.target.files[0])
    await axios.post(baseUrl + "image/upload-image", formdata, config).then((res) => {
      console.log('res', res)
      setImage1(res?.data?.url)
    }).catch((err) => {
      console.log('err', err)
    })
  }
  const handleChangeImage2 = async (e) => {
    console.log('e.target', e.target)
    const formdata = new FormData()
    formdata.append("image", e.target.files[0])
    await axios.post(baseUrl + "image/upload-image", formdata, config).then((res) => {
      console.log('res', res)
      setImage2(res?.data?.url)
    }).catch((err) => {
      console.log('err', err)
    })
  }
  const handleChangeImage3 = async (e) => {
    console.log('e.target', e.target)
    const formdata = new FormData()
    formdata.append("image", e.target.files[0])
    await axios.post(baseUrl + "image/upload-image", formdata, config).then((res) => {
      console.log('res', res)
      setImage3(res?.data?.url)
    }).catch((err) => {
      console.log('err', err)
    })
  }
  useEffect(() => {
    getCategory()
    getSubCategory()
    getColor()
  }, [])
  return (

    <div className='back-img'>
      <>

        <div>
          <div id="wrapper">

            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                {/* TopBar */}

                {/* Topbar */}

                {/* Register Content */}
                <div className="container-login">
                  <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-12 col-md-12">
                      <div className="card shadow-sm my-5">
                        <div className="card-body p-0">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="container">
                                <div className="text-center"> <br />
                                  <h1 className="h2 text-gray-900 mb-4">
                                    Add New Product
                                  </h1>  <hr /> <br />
                                </div>

                                <form>
                                  {tab === 0 && <> <div>

                                    <label htmlFor="exampleInputEmail1">
                                      Select Animal
                                    </label>{" "}
                                    <br />
                                    <select

                                      className="form-control mb-3"
                                      name="c_id"
                                      value={newData?.c_id}
                                      onChange={handleChange}
                                    >
                                      {category?.map((v, i) => {
                                        return (
                                          <>
                                            <option value={v?._id}>{v?.name}</option>
                                          </>
                                        );
                                      })}

                                    </select>
                                  </div>
                                    <div>

                                      <label htmlFor="exampleInputEmail1">
                                        Select Breed
                                      </label>{" "}
                                      <br />
                                      <select

                                        className="form-control mb-3"
                                        name="s_c_id"
                                        value={newData?.s_c_id}
                                        onChange={handleChange}

                                      >

                                        {subCategory.filter((v) => v?.categoryId?._id === (newData?.c_id || "640f478bd0cf447b327fa6cf"))?.map((v, i) => {
                                          return (
                                            <>
                                              <option value={v?.name}>{v?.name}</option>
                                            </>
                                          );
                                        })}
                                      </select>
                                    </div>


                                    <div className="form-group">
                                      <label>Age :</label>
                                      <input

                                        type="number"
                                        min={1}
                                        name="age"
                                        className="form-control"
                                        id="exampleInputEmail"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter Age(In Year)"
                                        value={newData?.age}
                                        onChange={handleChange}
                                      />
                                    </div>

                                    <div className="form-group">
                                      <label>Enter Weight :</label>
                                      <input

                                        name="weight"
                                        type="number"
                                        className="form-control"
                                        min={0}
                                        id="exampleInputPassword"
                                        placeholder=" Enter Weight (In Kgf)"
                                        value={newData?.weight}
                                        onChange={handleChange}
                                      />
                                    </div>

                                    <div className="form-group">
                                      <label> Price :</label>
                                      <input

                                        type="number"
                                        name="price"
                                        min={0}
                                        className="form-control"
                                        id="exampleInputFirstName"
                                        placeholder="Enter Price"
                                        value={newData?.price}
                                        onChange={handleChange}
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label>Animal Description :</label>

                                      <textarea

                                        name="description"
                                        className="form-control"
                                        id="exampleInputLastName"
                                        placeholder="Enter Animal Description"
                                        cols="30"
                                        rows="5"
                                        value={newData?.description}
                                        onChange={handleChange}
                                      ></textarea>
                                    </div>


                                    <div>

                                      <label htmlFor="exampleInputEmail1">
                                        Color
                                      </label>
                                      <br />
                                      <select

                                        className="form-control mb-3"
                                        value={newData?.color_id}
                                        onChange={handleChange}
                                        name="color_id">
                                        {color.filter((v) => v?.categoryId?._id === newData?.c_id)?.map((v, i) => {
                                          return (
                                            <>
                                              <option value={v?.name}>{v?.name}</option>
                                            </>
                                          );
                                        })}
                                      </select>
                                    </div>





                                    <br />
                                    {newData?.c_id !== "64108765023f69996a4a4086" && <><div className="form-group">
                                      <label>Milk Liter/Day  : </label>
                                      <input

                                        name="milk"
                                        type="number"
                                        className="form-control"
                                        id="exampleInputPasswordRepeat"
                                        placeholder="In Liter"
                                        min={0}
                                        value={newData?.milk}
                                        onChange={handleChange}
                                      />
                                    </div>
                                      <div className="form-group">
                                        <label className="labels">
                                          Lactation (Biyat) :{" "}
                                        </label>
                                        <input

                                          name="lactation"
                                          type="number"
                                          min={0}
                                          className="form-control"
                                          id="exampleInputPasswordRepeat"
                                          placeholder="Enter Laction (Biyat)"
                                          value={newData?.lactation}
                                          onChange={handleChange}
                                        />
                                      </div>
                                      <div className="form-group" >
                                        <label>Calf :&nbsp; &nbsp;</label>
                                        NO  &nbsp;
                                        <label className="switch">
                                          <input type="checkbox" name='calf' checked={calf}
                                            onChange={handleChangeCalf} />
                                          <span className="slider round" />
                                        </label> &nbsp; YES
                                      </div>


                                      {calf && <><div className="form-group">
                                        <label>Calf Age :</label>
                                        <input

                                          type="number"
                                          min={0}

                                          name="calf_age"
                                          className="form-control"
                                          id="exampleInputEmail"
                                          aria-describedby="emailHelp"
                                          placeholder="Enter Age (In Year)"
                                          value={newData?.calf_age}
                                          onChange={handleChange}
                                        />
                                      </div>



                                        <label htmlFor="gender"> Calf Gender:</label>
                                        <div className="form-check">

                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            name="gender"
                                            id="flexRadioDefault1"
                                            defaultChecked={gender === "Female" ? true : false}
                                            onClick={() => setGender("Female")}
                                          />
                                          <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Female
                                          </label>
                                        </div>
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            name="gender"
                                            id="flexRadioDefault2"
                                            defaultChecked={gender === "Male" ? true : false}
                                            onClick={() => setGender("Male")}
                                          />
                                          <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            Male
                                          </label>
                                        </div></>}</>}</>}


                                  <br />
                                  {tab === 1 && <><div className="form-group">
                                    <label className="starlabel label">
                                      {" "}
                                      Enter Front-Side Photo :{" "}
                                    </label>
                                    <input
                                      name="p_media"
                                      type="file"
                                      className="form-control "
                                      id="customFile"
                                      onChange={handleChangeImage}
                                      accept="image/png, image/jpg, image/jpeg , image/webp"
                                    // value={newData?.p_media}
                                    // onChange={handleChange}
                                    />
                                  </div>
                                    <div className="form-group">
                                      <label> Enter Back-Side Photo : </label>
                                      <input
                                        name="back-side"
                                        type="file"
                                        className="form-control"
                                        id="customFile"
                                        onChange={handleChangeImage1}
                                        accept="image/png, image/jpg, image/jpeg , image/webp"
                                      // value={newData?.back_side}
                                      // onChange={handleChange}
                                      />
                                    </div>

                                    <div className="form-group">
                                      <label> Enter Lumpy_Certificate : </label>
                                      <input
                                        name="lumpi_certificate"
                                        type="file"
                                        className="form-control"
                                        id="customFile"
                                        onChange={handleChangeImage2}
                                        accept="image/png, image/jpg, image/jpeg , image/webp"
                                      // value={newData?.lumpi_certificate}
                                      // onChange={handleChange}
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label> Enter General_report :</label>
                                      <input
                                        name="general_report"
                                        type="file"
                                        className="form-control"
                                        id="customFile"
                                        onChange={handleChangeImage3}
                                        accept="image/png, image/jpg, image/jpeg , image/webp"
                                      // value={newData?.general_report}
                                      // onChange={handleChange}
                                      />
                                    </div>


                                    <div className="form-group">
                                      <label> Seller Mobile Number :</label>
                                      <input

                                        name="seller_mobile"
                                        type="number"
                                        className="form-control"
                                        id="exampleInputPasswordRepeat"
                                        placeholder="Enter Mobile Number"
                                        value={newData?.seller_mobile}
                                        onChange={handleChange}
                                      />
                                    </div>


                                    <div className="form-group">
                                      <label> Enter City: </label>
                                      <input

                                        name="city"
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPasswordRepeat"
                                        placeholder="Enter City"
                                        value={newData?.city}
                                        onChange={handleChange}
                                      />
                                    </div>


                                    <div className="form-group">
                                      <label>Enter State : </label>
                                      <input

                                        name="state"
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPasswordRepeat"
                                        placeholder="Enter State"
                                        value={newData?.state}
                                        onChange={handleChange}
                                      />
                                    </div> </>}

                                  <div className="form-group d-flex justify-content-between align-items-center">
                                    <button
                                      type="button"
                                      className="btn btn-lg btn-primary btn-block"
                                      onClick={() => tab === 0 ? setTab(1) : setTab(0)}
                                    >
                                      {tab === 0 ? "Next" : "Back"}
                                    </button>
                                    {tab === 1 && <button
                                      type="button"
                                      className="btn btn-lg btn-primary btn-block"
                                      onClick={() => handleSubmit()}
                                    >
                                      Submit
                                    </button>}
                                  </div>
                                  <hr />

                                </form>


                                <div className="text-center"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



              </div>
            </div>
          </div>
        </div>

      </>
    </div>
  );
}




