import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";
import HeaderAdmin from "../../layout/HeaderAdmin/HeaderAdmin";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import del from "../../assets/images/icons8-delete-64.png";
import edit from "../../assets/images/icons8-edit-64.png";
import Pagination from "react-bootstrap/Pagination";
import styled from "./ProductManagement.module.css";
import JoditEditor from "jodit-react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonSend } from "../../components/Button/Button";

export const ProductManagement = () => {
  const [Product, setProduct] = useState([]);
  const [Pagin, setPagi] = useState([]);
  const [Page, setPage] = useState(1);
  const [btn, setbtn] = useState([]);
  const [show, setShow] = useState(false);
  const [modul, setModul] = useState(false);
  const [namecart, setnamecard] = useState();
  const [cardid, setcardid] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [Show, setshow] = useState(false);
  const [Edit, setEdit] = useState([]);

  const handleClosee = () => setshow(false);
  const handleShoww = () => setshow(true);
  const [refresh ,setrefresh ] = useState(true)

  useEffect(() => {
    axios
      .get(`http://localhost:3003/Product?_page=${Page}&_limit=5`)
      .then((response) => {
        setProduct(response.data);
      });
    axios.get("http://localhost:3003/Product").then((response) => {
      setPagi(response.data);
    });
  }, [Page , refresh]);

  useEffect(() => {
    const Pagination = [];
    for (let i = 1; i < Pagin.length / 5 + 1; i++) {
      Pagination.push(i);
    }
    setbtn(Pagination);
  }, [Pagin]);

  const hendleNext = () => {
    if (Page < btn.length) {
      setPage(Page + 1);
    }
    return;
  };

  const handlePrev = () => {
    if (Page >= 1) {
      setPage(Page - 1);
    }
    return;
  };

  const handleFilter = (value) => {
    axios
      .get(`http://localhost:3003/Product?leader=${value}`)
      .then((response) => {
        setProduct(response.data);
      });
  };
  const handleDelete = (id) => {
    const productName = Product.filter((item) => {
      return item.id === id;
    });
    setnamecard(productName[0].name);
    setcardid(id);
    setModul(true);
  };
  const handleDel = () => {
    axios.delete(`http://localhost:3003/product/${cardid}`);
    setModul(false);
    setrefresh(!refresh);
  };
  const handleCansle = () => {
    setModul(false);
  };
  const handleedit = (id) => {
    const edite = Product.filter((item) => {
      return item.id === id;
    });
    console.log(edite);
    setEdit(edite);

    handleShoww();
  };
  console.log(Edit);

  return (
    <Fragment>
      <HeaderAdmin product={{ background: "rgb(93, 93, 250)" }} />
      <div className="d-flex p-2">
        <h1 className="col-6">مدریت کالاها</h1>
        <div className="col-5">
          <select
            name=""
            id="demo"
            onChange={(e) => handleFilter(e.target.value)}
          >
            <option value="فیلتر کردن">فیلتر کردن</option>
            <option value="گوشی موبایل">گوشی موبایل</option>
            <option value="لپ تاپ">لپ تاپ</option>
            <option value="دوربین">دوربین</option>
          </select>
        </div>
        <ButtonSend color={"success"} onClick={handleShow}>
          افزودن کالا
        </ButtonSend>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>تصویر</th>
            <th>نام کالا</th>
            <th>دسته بندی</th>
            <th className="text-center">ویرایش</th>
            <th className="text-center">حذف</th>
          </tr>
        </thead>
        <tbody>
          {Product.map((item) => {
            return (
              <>
                <tr>
                  <td>
                    <img
                      src={`http://localhost:3003/files/${item.image[0]}`}
                      alt="image"
                      width={40}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{`${item.group}/${item.leader}`}</td>
                  <td className="text-center">
                    <img
                      src={edit}
                      alt="edit"
                      width={30}
                      onClick={() => {
                        handleedit(item.id);
                      }}
                    />
                  </td>
                  <td className="text-center">
                    <img
                      src={del}
                      alt="del"
                      width={30}
                      onClick={() => handleDelete(item.id)}
                    />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
      <div>
        <Pagination>
          <Pagination.Item onClick={hendleNext}>Next</Pagination.Item>
          {btn.map((item) => {
            return (
              <>
                <Pagination.Item key={item} onClick={() => setPage(item)}>
                  {item}
                </Pagination.Item>
              </>
            );
          })}
          <Pagination.Item onClick={handlePrev}>prev</Pagination.Item>
        </Pagination>
      </div>
      <div>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>افزودن کالا</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action="">
              <label className="form-label">عکس کالا :</label>
              <input
                type="file"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <label className="form-label">نام کالا : </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <label className="form-label">قیمت کالا :</label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <label className="form-label">دسته بندی کالا :</label>
              <Form.Select aria-label="Default select example">
                <option>دسته بندی کالا</option>
                <option value="گوشی موبایل">گوشی موبایل </option>
                <option value="لپ تاپ">لپ تاپ</option>
                <option value="دوربین">دوربین</option>
              </Form.Select>

              <label className="form-label">مشخصات کالا :</label>
              <JoditEditor
                ref={editor}
                value={content}
                tabIndex={1}
                onBlur={(newContent) => setContent(newContent)}
                onChange={(newContent) => {}}
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              ذخیره
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        {Edit.map(value=>{
          return(
            <>
            <Modal show={Show} onHide={handleClosee} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>ویرایش کالا</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form action="">
                    <label className="form-label">عکس کالا :</label>
                    <input
                      type="file"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <label className="form-label">نام کالا : </label>
                    <input
                      type="text"
                      defaultValue={value.name}
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <label className="form-label">قیمت کالا :</label>
                    <input
                      type="number"
                      defaultValue={value.section}
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    
                    <label className="form-label">موجودی:</label>
                    <input
                      type="number"
                      defaultValue={value.inventory}
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <label className="form-label">دسته بندی کالا :</label>
                    <Form.Select aria-label="Default select example">
                      <option>دسته بندی کالا</option>
                      <option value="گوشی موبایل">گوشی موبایل </option>
                      <option value="لپ تاپ">لپ تاپ</option>
                      <option value="دوربین">دوربین</option>
                    </Form.Select>

                    <label className="form-label">مشخصات کالا :</label>
                    <JoditEditor
                      ref={editor}
                      value={value.Description}
                      tabIndex={1}
                      onBlur={(newContent) => setContent(newContent)}
                      onChange={(newContent) => {}}
                    />
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleClosee}>
                    ذخیره
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          )
        })}
              
      </div>
      <div>
        {modul === true ? (
          <div className={styled.module}>
            <h2 className="text-danger p-5 text-center">
              آیا از حذف این محصول مطمعن هستید ؟
            </h2>
            <div>{namecart}</div>
            <div className={styled.btnDel}>
              <button className={styled.btndelete} onClick={handleDel}>
                بله
              </button>
              <button className={styled.btncansel} onClick={handleCansle}>
                خیر
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};
