import React, { useState } from "react";
import "./Form.css";
// state = {
//   nama: "",
//   jurusan: "",
//   gender: "",
//   alamat: "",
//   member: false,
// }
const Form = () => {
  const [error, setError] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const nama = event.target.nama.value;
    const jurusan = event.target.jurusan.value;
    const gender = event.target.gender.value;
    console.log(nama, "NAMA");
    console.log(jurusan, "JURUSAN");
    console.log(gender, "GENDER");

    // ngirim data ke api
    // pemanggilan api axios.post('/users', {nama, jurusan, gender})
  };

  const handleNameChange = (e) => {
    const regex = /\w$/g;
    const value = e.target.value;
    const validasi = regex.test(value);
    console.log(validasi, "validasi");
    if (!validasi) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nama :{" "}
        <input
          type="text"
          style={{
            backgroundColor: error ? "red" : "#000",
          }}
          name="nama"
          onChange={handleNameChange}
        />
      </label>
      <br />
      <label>
        Jurusan :
        <select name="jurusan">
          <option value="">Pilih Jurusan</option>
          <option value="Teknik Informatika">Teknik Informatika</option>
          <option value="Sistem Informasi">Sistem Informasi</option>
        </select>
      </label>
      <br />
      <label>
        Jenis Kelamin :<p>laki</p>
        <input type="radio" value="Laki-laki" name="gender" />
        <p>cewek</p>
        <input type="radio" value="Perempuan" name="gender" />
      </label>
      <br />
      <label>
        Alamat : <textarea cols="30" rows="10" name="alamat"></textarea>
      </label>
      <br />
      <label>
        Member :
        <input type="checkbox" name="member" />
      </label>
      <br />
      <button type="submit">Kirim</button>
    </form>
  );
};

export default Form;
