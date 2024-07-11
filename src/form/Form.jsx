import React from "react";
import "./Form.css";
const Form = (
  state = {
    nama: "",
    jurusan: "",
    gender: "",
    alamat: "",
    member: false,
  }
) => {
  return (
    <form onSubmit={}>
      <label>
        Nama : <input type="text" name="nama" onChange={(e) => console.log(e.target.value)} />
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
        Jenis Kelamin :
        <input type="radio" value="Laki-laki" name="gender" />
        <input type="radio" value="Perempuan" name="gender" />
      </label>
      <br />
      <label>
        Alamat : <textarea cols="30" rows="10" name="alamat"></textarea>
      </label>
      <br />
      <label>
        Member :
        <input type="checkbox" value={true} name="member" />
      </label>
      <br />
      <button type="submit">Kirim</button>
    </form>
  );
};

export default Form;
