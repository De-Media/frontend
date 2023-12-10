import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
import BasicSpeedDial from "../../components/BasicSpeedDial";
import { DataContext } from "../../context/DataContext";
import List from "../../components/List";
import { convert, getMedia } from "../../utils/contractFunctions";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const HomePage = () => {
  // const data = useContext(DataContext);

  const _data = React.useRef([]);
  const [data, setData] = useState([]);
  const [filtdata, setFiltData] = useState([]);
  const [type, setType] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);

  const handleChange = (event) => {
    setType(event.target.value);
  };

  useEffect(() => {
    setFilter();
  }, [data, type]);

  const setFilter = () => {
    if (type === 1) {
      const arr = data;
      setFiltData(arr.filter((i) => !i.isPoll));
    } else if (type === 2) {
      const arr = data;
      setFiltData(arr.filter((i) => !!i.isPoll));
    } else setFiltData(data);
  };

  const getData = async (i) => {
    console.log("Loading data", i);
    try {
      const d = await getMedia({ mediaIndex: i });
      if (d) {
        const converted = convert(d);
        // setData([...data, converted]);
        _data.current.push(converted);
        getData(i + 1);
      } else {
        setData(_data.current);
      }
    } catch (err) {
      setData(_data.current);
    }
  };

  useEffect(() => {
    console.log("Calling useEffect");
    getData(1);
    setLoaded(true);
  }, []);

  const onClose = () => {
    _data.current = [];
    setData([]);
    getData(1);
  };

  return (
    <Layout>
      <Helmet>
        <title>DeMedia | Home</title>
      </Helmet>
      <div className="">
        <FormControl sx={{ m: 1, minWidth: 120, zIndex: 0 }} size="small">
          <InputLabel id="demo-select-small-label">Filter</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={type}
            label="Filter"
            onChange={handleChange}
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={1}>Post</MenuItem>
            <MenuItem value={2}>Poll</MenuItem>
          </Select>
        </FormControl>
        {data.length}
      </div>
      <List items={filtdata} />
      <BasicSpeedDial onClose={onClose} />
    </Layout>
  );
};

export default HomePage;
