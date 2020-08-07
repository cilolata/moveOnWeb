/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import CardProduct from '../Card';

import { Container } from './styles';

function ModalSearch(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container>
            <Button
                variant="primary"
                onClick={handleShow}
                className="button__search"
            >
                pesquisar
            </Button>

            <Modal show={show} onHide={handleClose} className="modal">
                <Modal.Body classNamw="d-flex">
                    {props.search.map((e) => (
                        <Link to={`/aparelho/${e.id}`} key={e.id}>
                            <CardProduct
                                nome={e.nome}
                                foto={e.foto.url}
                                descricao={e.descricao}
                                valorDiaria={e.valor_diaria}
                                className="card__search"
                            />
                        </Link>
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default ModalSearch;
