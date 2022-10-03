import React, { useState } from "react";
import localStorage from "../localStorage";
const AccountComponent = (props) => {
  const { listUser, putUser, deleteUser, termAdmin } = props;
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  let listData = [];

  const hanleSelect = (item) => {
    setUserName(item.userName);
    setPhone(item.phone);
  };

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  if (listUser) {
    listData = listUser.map((item, idx) => {
      return (
        <tr key={idx}>
          <td>{item.userName}</td>
          <td>{item.phone}</td>
          <td>{item.role}</td>
         
          {/* {
                        user.role === "admin"
                            ?
                            <>
                                <td>
                                    <button onClick={() => hanleSelect(item)} > Sửa </button>
                                </td>
                                <td>
                                    <button> Xóa </button>
                                </td>
                                {
                                    item.role !== "admin"
                                        ?
                                        <td>
                                            <button> Chỉ Định làm Admin </button>
                                        </td>
                                        :
                                        <></>
                                }
                            </>
                            :
                            <></>
                    } */}
        </tr>
      );
    });
  }

  const handleLogout = async () => {
    await localStorage.clearToken();
    // cách 1
    // window.location.href = window.location.origin + "/login"
    // cách 2
    window.location.reload();
  };

  return (
    <div>
      <button onClick={handleLogout}>Đăng Xuất</button>
      <table>
        <tbody>
          <tr>
            <td width="100px">userName</td>
            <td width="100px">phone</td>
            <td width="100px">role</td>
          </tr>
          {listData}
        </tbody>
      </table>

      <div>
        <input
          placeholder="user name"
          value={userName}
          onChange={(e) => handleChange(e, setUserName)}
        />
        <input
          placeholder="số điện thoại"
          value={phone}
          type="number"
          onChange={(e) => handleChange(e, setPhone)}
        />
        <button
          onClick={() => {
            putUser({ userName, phone });
          }}
        >
          Xong
        </button>
      </div>
    </div>
  );
};

export default AccountComponent;
