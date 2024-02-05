import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import { getPhotos } from './api/gallery';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { Modal } from './Modal/Modal';

export default class App extends Component {
  state = {
    query: '',
    page: 1,
    photos: [],
    totalPages: 1,
    isLoader: false,
    showModal: false,
    modalContent: {},
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ isLoader: true });
        const data = await getPhotos(query, page);

        this.setState(prev => ({
          photos: [...prev.photos, ...data.results],
        }));
        if (prevState.totalPages !== data.total_pages) {
          this.setState({ totalPages: data.total_pages });
        }
      } catch (e) {
        console.log(e);
        toast.error('Sorry, problem connection to server!');
      } finally {
        this.setState({ isLoader: false });
      }
    }
  }

  handleFormSubmit = query => {
    this.setState({ query, page: 1, photos: [] });
  };

  handleClickButton = e => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  handleToggleModal = () => {
    this.setState(prev => ({ showModal: !prev.showModal }));
  };

  handleOpenModal = img => {
    this.setState({ modalContent: img, showModal: true, isLoader: true });
  };

  handleToggleLoader = () => {
    this.setState(prev => ({ isLoader: !prev.isLoader }));
  };

  render() {
    const { photos, page, totalPages, isLoader, showModal, modalContent } =
      this.state;
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {photos && (
          <ImageGallery photos={photos} openModal={this.handleOpenModal} />
        )}
        {totalPages > 1 && page < totalPages && !isLoader ? (
          <Button onClick={this.handleClickButton} />
        ) : (
          ''
        )}
        {isLoader && <Loader />}
        {showModal && (
          <Modal close={this.handleToggleModal}>
            {isLoader && <Loader color="white" />}
            <img
              className={s.ModalContent}
              src={modalContent.src}
              alt={modalContent.alt}
              onLoad={this.handleToggleLoader}
            />
          </Modal>
        )}
        <ToastContainer />
      </div>
    );
  }
}
