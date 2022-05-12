import styles from '../../styles/wish.module.css';
import Image from 'next/image';
import Confetti from 'react-confetti';
import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import Head from 'next/head'

const Wish = () => {

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          height: '90vh',
          width: '90vw',
          background: `url('/images/bg.jpg')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirections: 'column',
          justifyContent: 'center',
        },
    };

    let height = 0;
    let width = 0;

    useEffect(() => {
        const {innerHeight, innerWidth} = window
        height = 0;
        width = 0;
    }, [])

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className={styles.wishContainer}>
            <Head>
                <title>Sorry 😣</title>
            </Head>
            { modalOpen && <Confetti height={height} width={width} />}
            <Modal
                isOpen={modalOpen} 
                onRequestClose={() => setModalOpen(false)}
                style={customStyles}
            >
                <h1 className={styles.successText}>Yayyyyy!! <br/> I Love You</h1>
            </Modal>
            <h1>Click the heart to forgive me</h1>
            <Image src={'/images/heart.jpg'} height={100} width={100} priority onClick={() => setModalOpen(true)}/>
        </div>
    )
}

export default Wish