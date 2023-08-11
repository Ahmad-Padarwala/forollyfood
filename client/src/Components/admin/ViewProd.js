import React, { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import axios from "axios";

export default function ViewProd() {
  const location = useLocation();
  const viewId = location.state.id;
  const [viewProdData, setViewProdData] = useState([]);
  const [viewBrand, setViewBrand] = useState([]);
  const [viewCate, setViewCate] = useState([]);

  useEffect(() => {
    fetchProdData(viewId);
  }, []);

  const fetchProdData = (id) => {
    axios
      .get(`/product/${id}/5`)
      .then((response) => {
        setViewProdData(response.data[0]);
        fetchBrandName(response.data[0].brand_id);
        fetchCateName(response.data[0].cate_id);
      })
      .catch((error) => {
        console.log("Error fetching Product data:", error);
      });
  };

  //GET BRAND NAME
  const fetchBrandName = (id) => {
    axios
      .get(`/brand/${id}`)
      .then((response) => {
        setViewBrand(response.data[0]);
      })
      .catch((error) => {
        console.log("Error fetching Product data:", error);
      });
  };

  //GET CATEGORY NAME
  const fetchCateName = (id) => {
    axios
      .get(`/category/${id}`)
      .then((response) => {
        setViewCate(response.data[0]);
      })
      .catch((error) => {
        console.log("Error fetching Product data:", error);
      });
  };

  return (
    <>
      <div className="add-form-main">
        <form>
          <div className="addMain p-4">
            <h1 className="text-center">VIEW PRODUCT</h1>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Product Id:
              </label>
              <p className="vew-data">{viewProdData.prod_id}</p>
            </div>

            {/* {viewBrand.name && (
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Brand Name:
                </label>
                <p className="vew-data">{viewBrand.name}</p>
              </div>
            )}

            {viewCate.name && (
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Category Name:
                </label>
                <p className="vew-data">{viewCate.name}</p>
              </div>
            )} */}

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Brand Name:
              </label>
              {viewBrand && viewBrand.name ? (
                <p className="vew-data">{viewBrand.name}</p>
              ) : (
                <p className="vew-data">Brand not available</p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Category Name:
              </label>
              {viewCate && viewCate.name ? (
                <p className="vew-data">{viewCate.name}</p>
              ) : (
                <p className="vew-data">Category not available</p>
              )}
            </div>

            <div className="mb-2">
              <label htmlFor="userName" className="form-label">
                Product Short Description:
              </label>
              <div className="vew-data">{viewProdData.short_desc}</div>
            </div>

            <div className="mb-2">
              <label htmlFor="userName" className="form-label">
                Product Long Description:
              </label>
              {viewProdData.long_desc && viewProdData.long_desc ? (
                <div className="vew-data">{viewProdData.long_desc}</div>
              ) : (
                <div className="vew-data">Long Description is not avialble</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="formFile" className="form-label me-4">
                Product Image:
              </label>
              {viewProdData.image && (
                <img
                  src={require(`../../Assets/upload/${viewProdData.image}`)}
                  alt=""
                  width="100px"
                />
              )}
            </div>
            <NavLink to="/product" className="btn btn-danger mt-3 ms-3">
              BACK
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
}
