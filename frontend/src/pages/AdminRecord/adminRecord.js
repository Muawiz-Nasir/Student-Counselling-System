import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AuthenticatedAdminPagesLayout from "../../components/AuthenticatedAdminPagesLayout";
import "./adminRecord.css";
import { SERVER_BASE_URL } from "../../config";
import { useMutation, useQuery } from "react-query";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";

const AdminRecord = () => {
  const [refetchCounseller, setRefetchCounseller] = useState(0);
  const [showAddCounsellerModal, setShowAddCounsellerModal] = useState(false);
  // const [showStudentDetailsModal, setShowStudentDetailsModal] = useState(false);

  const [newCounseller, setNewCounseller] = useState({
    loginId: "",
    loginPassword: "",
  });

  const token = localStorage.getItem("token");

  const getStudents = () =>
    axios.get(`${SERVER_BASE_URL}/students`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

  const getCounsellers = () =>
    axios.get(`${SERVER_BASE_URL}/admin/counseller`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

  const studentsQuery = useQuery("studentsData", () => getStudents());
  const counsellersQuery = useQuery(["counsellerData", refetchCounseller], () => getCounsellers());

  const handleCloseCounsellerModal = () => setShowAddCounsellerModal(false);

  const handleChangeNewCounseller = (event) => {
    const { name, value } = event.target;
    setNewCounseller({
      ...newCounseller,
      [name]: value,
    });
  };

  const addNewCounseller = async (formData) => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    const response = await axios.post(
      `${SERVER_BASE_URL}/admin/counseller`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  };

  const addCounsellerMutation = useMutation(addNewCounseller, {
    onError: () => {
      toast("Something went wrong");
    },
    onSuccess: (response) => {
      console.log(response);
      toast("Added new counseller");
      setNewCounseller({
        loginId: "",
        loginPassword: "",
      });
      setShowAddCounsellerModal(false);
      setRefetchCounseller(refetchCounseller + 1);
    },
  });

  const handleAddNewCounseller = (event) => {
    event.preventDefault();
    console.log(newCounseller);

    if(newCounseller?.loginId < 4 || !newCounseller?.loginPassword){
      return toast.error('Field values small')
    }

    addCounsellerMutation.mutate(newCounseller);
  };

  const deleteCounseller = async (id) => {
    const token = localStorage.getItem("token");
  
    const response = await axios.delete(
      `${SERVER_BASE_URL}/admin/counseller/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  };

  const deleteCounsellerMutation = useMutation(deleteCounseller, {
    onError: () => {
      toast("Something went wrong");
    },
    onSuccess: (response) => {
      console.log(response);
      toast("counseller deleted");
      setRefetchCounseller(refetchCounseller + 1);
    },
  });

  const handleDeleteCounseller = (id) => {
    deleteCounsellerMutation.mutate(id);
  };

  return (
    <AuthenticatedAdminPagesLayout>
      <div className="admin-container">
        <div>
          <h2>Counselor Details</h2>
          <Button style={{ marginBottom: "10px" }} onClick={() => setShowAddCounsellerModal(true)}>
            Add Counseller
          </Button>
          <div className="counselor-section">
            {counsellersQuery.isLoading && "Loading"}
            {counsellersQuery.isSuccess &&
              counsellersQuery?.data?.data?.length === 0 &&
              "No record found"}
            {counsellersQuery?.data?.data?.length > 0 && (
              <table className="counselor-table">
                <tr>
                  <th>ID</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
                {counsellersQuery?.data?.data.map((counseller) => (
                  <tr>
                    <td>{counseller.loginId}</td>
                    <td>{counseller.loginPassword}</td>
                    <td>
                      <button onClick={() => handleDeleteCounseller(counseller.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </table>
            )}
          </div>
        </div>

        <div className="students-table-wrapper">
          <h2>Student Details</h2>
          {studentsQuery.isLoading && "Loading"}
          {studentsQuery.isSuccess &&
            studentsQuery?.data?.data?.length === 0 &&
            "No record found"}
          <table className="student-table">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Details</th>
            </tr>
            {studentsQuery?.data?.data?.length > 0 &&
              studentsQuery?.data?.data.map((student) => (
                <tr>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.phone}</td>
                  <td>18</td>
                </tr>
              ))}
          </table>
        </div>
      </div>
      <Modal show={showAddCounsellerModal} onHide={handleCloseCounsellerModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Counseller</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddNewCounseller}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Counseller login Id Here</Form.Label>
              <Form.Control
                type="text"
                name="loginId"
                value={newCounseller.loginId}
                onChange={handleChangeNewCounseller}
                placeholder="name@example.com"
                minLength={5}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Counseller login Password Here</Form.Label>
              <Form.Control
                type="text"
                name="loginPassword"
                minLength={5}
                value={newCounseller.loginPassword}
                onChange={handleChangeNewCounseller}
                placeholder="name@example.com"
                autoFocus
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCounsellerModal}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={handleAddNewCounseller}
          >
            Add Counseller
          </Button>
        </Modal.Footer>
      </Modal>
    </AuthenticatedAdminPagesLayout>
  );
};
export default AdminRecord;
