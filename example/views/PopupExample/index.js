import React, { useState } from 'react'
import { Popup } from '../../../src/components/Popup'
import { AlertUI } from '../../components/AlertUI'
import './style.css'
import { TestComponent } from '../../components/TestComponent'

export const PopupExample = () => {
  const [modals, setModals] = useState({ showModal1: true, showModal2: true, showModal3: true, showModal4: true })

  const openModal = (modal) => {
    setModals({
      ...modals,
      [modal]: true
    })
  }

  const closeModal = (modal) => {
    const newState = {
      ...modals,
      [modal]: false
    }
    setModals({ ...newState })
  }

  const popup1Props = {
    UIComponent: AlertUI,
    open: modals.showModal1,
    onAccept: () => closeModal('showModal1'),
    onCancel: () => closeModal('showModal1'),
    onClose: () => closeModal('showModal1'),
    title: 'Alert 1',
    content: 'Test'
  }

  const popup2Props = {
    UIComponent: AlertUI,
    open: modals.showModal2,
    onAccept: () => closeModal('showModal2'),
    onCancel: () => closeModal('showModal2'),
    onClose: () => closeModal('showModal2'),
    title: 'Alert 2',
    content: ['Test 1', 'Test 2']
  }

  const popup3Props = {
    UIComponent: AlertUI,
    open: modals.showModal3,
    onAccept: () => closeModal('showModal3'),
    onCancel: () => closeModal('showModal3'),
    onClose: () => closeModal('showModal3'),
    title: 'Alert 3',
    content: <p>Test</p>
  }

  const popup4Props = {
    UIComponent: AlertUI,
    open: modals.showModal4,
    onAccept: () => closeModal('showModal4'),
    onCancel: () => closeModal('showModal4'),
    onClose: () => closeModal('showModal4'),
    title: 'Alert 4',
    content: TestComponent
  }

  return (
    <>
      <Popup {...popup1Props} />
      <Popup {...popup2Props} />
      <Popup {...popup3Props} />
      <Popup {...popup4Props} />
      <button onClick={() => openModal('showModal1')}>Open modal 1</button>
      <button onClick={() => openModal('showModal2')}>Open modal 2</button>
      <button onClick={() => openModal('showModal3')}>Open modal 3</button>
      <button onClick={() => openModal('showModal4')}>Open modal 4</button>
      Test
    </>
  )
}
