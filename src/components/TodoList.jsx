import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { CiTrash } from "react-icons/ci";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";
import { useState } from "react";
import { Modal } from "antd";
import '/fonts.css';

const TodoList = ({
  todo,
  handleDelete,
  handleEditChange,
  editingText,
  handleUpdateTodo,
  handleInputEdit,
  isEditing,
  index,
  handleKeyDownEdit,
  toggleComplete,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  if (!todo) {
    return null;
  }

  const TodoModal = ({ todo, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-[#F5DEB3] p-6 rounded-lg shadow-xl max-w-md w-full m-4 max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-[#8B4513] mb-4 break-words">
          {todo.text}
        </h2>
        <p className="text-[#A0522D] mb-2">Added: {todo.addedAt}</p>
        <p className="text-[#8B4513] mb-4">
          Status: {todo.completed ? "Completed" : "Pending"}
        </p>
        <button
          onClick={onClose}
          className="bg-[#D2691E] text-white px-4 py-2 rounded hover:bg-[#8B4513] transition duration-300"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );

  TodoModal.propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  const showDeleteConfirmModal = () => {
    Modal.confirm({
      title: 'Are you sure you want to delete this todo?',
      content: 'This action cannot be undone.',
      okText: 'Yes, delete it',
      cancelText: 'No, keep it',
      onOk: () => handleDelete(index),
      okButtonProps: {
        style: {
          backgroundColor: '#8B4513',
          borderColor: '#8B4513',
        },
      },
      cancelButtonProps: {
        style: {
          color: '#8B4513',
          borderColor: '#8B4513',
        },
      },
      className: 'custom-delete-modal',
    });
  };

  return (
    <motion.div layout className="flex flex-col gap-4 mt-2">
      {isEditing ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col sm:flex-row items-center bg-[#D2B48C] shadow-md rounded-lg p-3 w-full"
        >
          <motion.input
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            type="text"
            value={editingText}
            onChange={handleInputEdit}
            onKeyDown={handleKeyDownEdit}
            className="flex-grow p-2 rounded-lg border border-[#DEB887] focus:outline-none focus:ring-2 focus:ring-[#8B4513] w-full sm:w-auto mb-2 sm:mb-0"
            placeholder="Edit your todo..."
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleUpdateTodo}
            className="ml-0 sm:ml-3 p-2 bg-[#8B4513] text-white rounded-full hover:bg-[#A0522D] transition duration-300"
          >
            <AiOutlineCheck className="text-xl" />
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col sm:flex-row items-start sm:items-center bg-[#ebddc4d9] shadow-md rounded-lg p-3 w-full"
        >
          <div className="flex-grow mb-2 sm:mb-0">
            <motion.p
              layout
              onClick={() => toggleComplete(index)}
              className={`text-[#8B4513] text-base sm:text-lg font-medium cursor-pointer break-words ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.text.length > 20
                ? `${todo.text.slice(0,20)}...`
                : todo.text}
            </motion.p>

            {todo.text.length > 20 && (
              <button
                onClick={() => setShowModal(true)}
                className="text-[#8B4513] underline text-sm hover:text-[#A0522D]"
              >
                See more
              </button>
            )}
            <div className="text-xs sm:text-sm text-gray-600 break-all mt-1">
              {todo.addedAt}
            </div>
          </div>
          <div className="flex justify-end w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleEditChange(index)}
              className="mr-2 p-2 bg-[#D2B48C] text-white rounded-full hover:bg-[#DEB887] transition duration-300"
            >
              <FiEdit2 className="text-xl" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={showDeleteConfirmModal}
              className="p-2 bg-[#A0522D] text-white rounded-full hover:bg-[#8B4513] transition duration-300"
            >
              <CiTrash className="text-xl" />
            </motion.button>
          </div>
        </motion.div>
      )}
      <AnimatePresence>
        {showModal && <TodoModal todo={todo} onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </motion.div>
  );
};

TodoList.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string,
    completed: PropTypes.bool,
    addedAt: PropTypes.string,
  }),
  handleDelete: PropTypes.func,
  handleEditChange: PropTypes.func,
  editingText: PropTypes.string,
  handleUpdateTodo: PropTypes.func,
  handleInputEdit: PropTypes.func,
  handleKeyDownEdit: PropTypes.func,
  isEditing: PropTypes.bool,
  index: PropTypes.number,
  toggleComplete: PropTypes.func,
};

export default TodoList;
