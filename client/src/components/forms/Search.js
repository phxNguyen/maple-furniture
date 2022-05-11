import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  const history = useHistory();

  const handleChange = (e) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/shop?${text}`);
  };

  return (
    <div class="input-group rounded float-right">
      <input
        onChange={handleChange}
        type="search"
        class="form-control rounded"
        placeholder="Search"
        aria-label="Search"
      />
      <span class="input-group-text border-0" >
        <i
          class="fas fa-search"
          onClick={handleSubmit}
          style={{ cursor: "pointer" }}
        ></i>
      </span>
    </div>
  );
};

export default Search;
