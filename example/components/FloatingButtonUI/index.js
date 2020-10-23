import React from 'react'

export const FloatingButtonUI = (props) => {
  const {
    btnText,
    btnValue,
    handleButtonClick,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  const styledDiv = {
    position: 'fixed',
    bottom: '0px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  }

  const styledButton = {
    position: 'relative',
    width: '50%',
    padding: '15px',
    backgroundColor: '#D81212',
    color: '#FFF',
    borderRadius: '50px',
    textAlign: 'center',
    fontSize: '20px',
    margin: '10px 0px',
    border: 0,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const styledSpan = {
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    padding: '10px',
    right: '7px',
    height: '20px',
    width: 'auto',
    minWidth: '20px'
  }

  return (
    <div style={{ position: 'relative' }}>
      {beforeElements.map((BeforeElement, i) => (
        <React.Fragment key={i}>
          {BeforeElement}
        </React.Fragment>
      ))}

      {beforeComponents.map(
        (BeforeComponent, i) => <BeforeComponent key={i} {...props} />
      )}
      <p>
        Do elit sint amet adipisicing adipisicing. Nisi elit deserunt enim enim. Ipsum reprehenderit anim consequat irure adipisicing occaecat ut voluptate do ex aute mollit quis dolor. Proident non aliquip do nostrud pariatur excepteur do tempor dolor sunt ad eu nulla officia. Aute irure irure mollit voluptate reprehenderit dolor eiusmod anim mollit dolore aliqua deserunt ullamco pariatur. Sit consectetur laborum eiusmod ad aute elit enim.Cillum sunt elit laboris id consequat culpa. Ex sit pariatur mollit esse ea velit est culpa proident aliqua aliqua. Officia proident nostrud non ipsum enim dolor irure cillum. Cupidatat est occaecat quis mollit enim veniam et duis officia adipisicing mollit. Irure labore aliqua culpa id. Aliquip aute dolor irure tempor.
      </p>
      <p>
        Do elit sint amet adipisicing adipisicing. Nisi elit deserunt enim enim. Ipsum reprehenderit anim consequat irure adipisicing occaecat ut voluptate do ex aute mollit quis dolor. Proident non aliquip do nostrud pariatur excepteur do tempor dolor sunt ad eu nulla officia. Aute irure irure mollit voluptate reprehenderit dolor eiusmod anim mollit dolore aliqua deserunt ullamco pariatur. Sit consectetur laborum eiusmod ad aute elit enim.Cillum sunt elit laboris id consequat culpa. Ex sit pariatur mollit esse ea velit est culpa proident aliqua aliqua. Officia proident nostrud non ipsum enim dolor irure cillum. Cupidatat est occaecat quis mollit enim veniam et duis officia adipisicing mollit. Irure labore aliqua culpa id. Aliquip aute dolor irure tempor.
      </p>
      <p>
        Do elit sint amet adipisicing adipisicing. Nisi elit deserunt enim enim. Ipsum reprehenderit anim consequat irure adipisicing occaecat ut voluptate do ex aute mollit quis dolor. Proident non aliquip do nostrud pariatur excepteur do tempor dolor sunt ad eu nulla officia. Aute irure irure mollit voluptate reprehenderit dolor eiusmod anim mollit dolore aliqua deserunt ullamco pariatur. Sit consectetur laborum eiusmod ad aute elit enim.Cillum sunt elit laboris id consequat culpa. Ex sit pariatur mollit esse ea velit est culpa proident aliqua aliqua. Officia proident nostrud non ipsum enim dolor irure cillum. Cupidatat est occaecat quis mollit enim veniam et duis officia adipisicing mollit. Irure labore aliqua culpa id. Aliquip aute dolor irure tempor.
      </p>
      <p>
        Do elit sint amet adipisicing adipisicing. Nisi elit deserunt enim enim. Ipsum reprehenderit anim consequat irure adipisicing occaecat ut voluptate do ex aute mollit quis dolor. Proident non aliquip do nostrud pariatur excepteur do tempor dolor sunt ad eu nulla officia. Aute irure irure mollit voluptate reprehenderit dolor eiusmod anim mollit dolore aliqua deserunt ullamco pariatur. Sit consectetur laborum eiusmod ad aute elit enim.Cillum sunt elit laboris id consequat culpa. Ex sit pariatur mollit esse ea velit est culpa proident aliqua aliqua. Officia proident nostrud non ipsum enim dolor irure cillum. Cupidatat est occaecat quis mollit enim veniam et duis officia adipisicing mollit. Irure labore aliqua culpa id. Aliquip aute dolor irure tempor.
      </p>
      <p>
        Do elit sint amet adipisicing adipisicing. Nisi elit deserunt enim enim. Ipsum reprehenderit anim consequat irure adipisicing occaecat ut voluptate do ex aute mollit quis dolor. Proident non aliquip do nostrud pariatur excepteur do tempor dolor sunt ad eu nulla officia. Aute irure irure mollit voluptate reprehenderit dolor eiusmod anim mollit dolore aliqua deserunt ullamco pariatur. Sit consectetur laborum eiusmod ad aute elit enim.Cillum sunt elit laboris id consequat culpa. Ex sit pariatur mollit esse ea velit est culpa proident aliqua aliqua. Officia proident nostrud non ipsum enim dolor irure cillum. Cupidatat est occaecat quis mollit enim veniam et duis officia adipisicing mollit. Irure labore aliqua culpa id. Aliquip aute dolor irure tempor.
      </p>
      <p>
        Do elit sint amet adipisicing adipisicing. Nisi elit deserunt enim enim. Ipsum reprehenderit anim consequat irure adipisicing occaecat ut voluptate do ex aute mollit quis dolor. Proident non aliquip do nostrud pariatur excepteur do tempor dolor sunt ad eu nulla officia. Aute irure irure mollit voluptate reprehenderit dolor eiusmod anim mollit dolore aliqua deserunt ullamco pariatur. Sit consectetur laborum eiusmod ad aute elit enim.Cillum sunt elit laboris id consequat culpa. Ex sit pariatur mollit esse ea velit est culpa proident aliqua aliqua. Officia proident nostrud non ipsum enim dolor irure cillum. Cupidatat est occaecat quis mollit enim veniam et duis officia adipisicing mollit. Irure labore aliqua culpa id. Aliquip aute dolor irure tempor.
      </p>
      <p>
        Do elit sint amet adipisicing adipisicing. Nisi elit deserunt enim enim. Ipsum reprehenderit anim consequat irure adipisicing occaecat ut voluptate do ex aute mollit quis dolor. Proident non aliquip do nostrud pariatur excepteur do tempor dolor sunt ad eu nulla officia. Aute irure irure mollit voluptate reprehenderit dolor eiusmod anim mollit dolore aliqua deserunt ullamco pariatur. Sit consectetur laborum eiusmod ad aute elit enim.Cillum sunt elit laboris id consequat culpa. Ex sit pariatur mollit esse ea velit est culpa proident aliqua aliqua. Officia proident nostrud non ipsum enim dolor irure cillum. Cupidatat est occaecat quis mollit enim veniam et duis officia adipisicing mollit. Irure labore aliqua culpa id. Aliquip aute dolor irure tempor.
      </p>
      <p>
        Do elit sint amet adipisicing adipisicing. Nisi elit deserunt enim enim. Ipsum reprehenderit anim consequat irure adipisicing occaecat ut voluptate do ex aute mollit quis dolor. Proident non aliquip do nostrud pariatur excepteur do tempor dolor sunt ad eu nulla officia. Aute irure irure mollit voluptate reprehenderit dolor eiusmod anim mollit dolore aliqua deserunt ullamco pariatur. Sit consectetur laborum eiusmod ad aute elit enim.Cillum sunt elit laboris id consequat culpa. Ex sit pariatur mollit esse ea velit est culpa proident aliqua aliqua. Officia proident nostrud non ipsum enim dolor irure cillum. Cupidatat est occaecat quis mollit enim veniam et duis officia adipisicing mollit. Irure labore aliqua culpa id. Aliquip aute dolor irure tempor.
      </p>
      <p>
        Do elit sint amet adipisicing adipisicing. Nisi elit deserunt enim enim. Ipsum reprehenderit anim consequat irure adipisicing occaecat ut voluptate do ex aute mollit quis dolor. Proident non aliquip do nostrud pariatur excepteur do tempor dolor sunt ad eu nulla officia. Aute irure irure mollit voluptate reprehenderit dolor eiusmod anim mollit dolore aliqua deserunt ullamco pariatur. Sit consectetur laborum eiusmod ad aute elit enim.Cillum sunt elit laboris id consequat culpa. Ex sit pariatur mollit esse ea velit est culpa proident aliqua aliqua. Officia proident nostrud non ipsum enim dolor irure cillum. Cupidatat est occaecat quis mollit enim veniam et duis officia adipisicing mollit. Irure labore aliqua culpa id. Aliquip aute dolor irure tempor.
      </p>
      <p>
        Do elit sint amet adipisicing adipisicing. Nisi elit deserunt enim enim. Ipsum reprehenderit anim consequat irure adipisicing occaecat ut voluptate do ex aute mollit quis dolor. Proident non aliquip do nostrud pariatur excepteur do tempor dolor sunt ad eu nulla officia. Aute irure irure mollit voluptate reprehenderit dolor eiusmod anim mollit dolore aliqua deserunt ullamco pariatur. Sit consectetur laborum eiusmod ad aute elit enim.Cillum sunt elit laboris id consequat culpa. Ex sit pariatur mollit esse ea velit est culpa proident aliqua aliqua. Officia proident nostrud non ipsum enim dolor irure cillum. Cupidatat est occaecat quis mollit enim veniam et duis officia adipisicing mollit. Irure labore aliqua culpa id. Aliquip aute dolor irure tempor.
      </p>
      <p>
        Do elit sint amet adipisicing adipisicing. Nisi elit deserunt enim enim. Ipsum reprehenderit anim consequat irure adipisicing occaecat ut voluptate do ex aute mollit quis dolor. Proident non aliquip do nostrud pariatur excepteur do tempor dolor sunt ad eu nulla officia. Aute irure irure mollit voluptate reprehenderit dolor eiusmod anim mollit dolore aliqua deserunt ullamco pariatur. Sit consectetur laborum eiusmod ad aute elit enim.Cillum sunt elit laboris id consequat culpa. Ex sit pariatur mollit esse ea velit est culpa proident aliqua aliqua. Officia proident nostrud non ipsum enim dolor irure cillum. Cupidatat est occaecat quis mollit enim veniam et duis officia adipisicing mollit. Irure labore aliqua culpa id. Aliquip aute dolor irure tempor.
      </p>
      <p>
        Do elit sint amet adipisicing adipisicing. Nisi elit deserunt enim enim. Ipsum reprehenderit anim consequat irure adipisicing occaecat ut voluptate do ex aute mollit quis dolor. Proident non aliquip do nostrud pariatur excepteur do tempor dolor sunt ad eu nulla officia. Aute irure irure mollit voluptate reprehenderit dolor eiusmod anim mollit dolore aliqua deserunt ullamco pariatur. Sit consectetur laborum eiusmod ad aute elit enim.Cillum sunt elit laboris id consequat culpa. Ex sit pariatur mollit esse ea velit est culpa proident aliqua aliqua. Officia proident nostrud non ipsum enim dolor irure cillum. Cupidatat est occaecat quis mollit enim veniam et duis officia adipisicing mollit. Irure labore aliqua culpa id. Aliquip aute dolor irure tempor.
      </p>
      <p>
        Do elit sint amet adipisicing adipisicing. Nisi elit deserunt enim enim. Ipsum reprehenderit anim consequat irure adipisicing occaecat ut voluptate do ex aute mollit quis dolor. Proident non aliquip do nostrud pariatur excepteur do tempor dolor sunt ad eu nulla officia. Aute irure irure mollit voluptate reprehenderit dolor eiusmod anim mollit dolore aliqua deserunt ullamco pariatur. Sit consectetur laborum eiusmod ad aute elit enim.Cillum sunt elit laboris id consequat culpa. Ex sit pariatur mollit esse ea velit est culpa proident aliqua aliqua. Officia proident nostrud non ipsum enim dolor irure cillum. Cupidatat est occaecat quis mollit enim veniam et duis officia adipisicing mollit. Irure labore aliqua culpa id. Aliquip aute dolor irure tempor.
      </p>
      <p>
        Do elit sint amet adipisicing adipisicing. Nisi elit deserunt enim enim. Ipsum reprehenderit anim consequat irure adipisicing occaecat ut voluptate do ex aute mollit quis dolor. Proident non aliquip do nostrud pariatur excepteur do tempor dolor sunt ad eu nulla officia. Aute irure irure mollit voluptate reprehenderit dolor eiusmod anim mollit dolore aliqua deserunt ullamco pariatur. Sit consectetur laborum eiusmod ad aute elit enim.Cillum sunt elit laboris id consequat culpa. Ex sit pariatur mollit esse ea velit est culpa proident aliqua aliqua. Officia proident nostrud non ipsum enim dolor irure cillum. Cupidatat est occaecat quis mollit enim veniam et duis officia adipisicing mollit. Irure labore aliqua culpa id. Aliquip aute dolor irure tempor.
      </p>
      <p>
        Do elit sint amet adipisicing adipisicing. Nisi elit deserunt enim enim. Ipsum reprehenderit anim consequat irure adipisicing occaecat ut voluptate do ex aute mollit quis dolor. Proident non aliquip do nostrud pariatur excepteur do tempor dolor sunt ad eu nulla officia. Aute irure irure mollit voluptate reprehenderit dolor eiusmod anim mollit dolore aliqua deserunt ullamco pariatur. Sit consectetur laborum eiusmod ad aute elit enim.Cillum sunt elit laboris id consequat culpa. Ex sit pariatur mollit esse ea velit est culpa proident aliqua aliqua. Officia proident nostrud non ipsum enim dolor irure cillum. Cupidatat est occaecat quis mollit enim veniam et duis officia adipisicing mollit. Irure labore aliqua culpa id. Aliquip aute dolor irure tempor.
      </p>
      <p>
        Do elit sint amet adipisicing adipisicing. Nisi elit deserunt enim enim. Ipsum reprehenderit anim consequat irure adipisicing occaecat ut voluptate do ex aute mollit quis dolor. Proident non aliquip do nostrud pariatur excepteur do tempor dolor sunt ad eu nulla officia. Aute irure irure mollit voluptate reprehenderit dolor eiusmod anim mollit dolore aliqua deserunt ullamco pariatur. Sit consectetur laborum eiusmod ad aute elit enim.Cillum sunt elit laboris id consequat culpa. Ex sit pariatur mollit esse ea velit est culpa proident aliqua aliqua. Officia proident nostrud non ipsum enim dolor irure cillum. Cupidatat est occaecat quis mollit enim veniam et duis officia adipisicing mollit. Irure labore aliqua culpa id. Aliquip aute dolor irure tempor.
      </p>
      <p>
        Do elit sint amet adipisicing adipisicing. Nisi elit deserunt enim enim. Ipsum reprehenderit anim consequat irure adipisicing occaecat ut voluptate do ex aute mollit quis dolor. Proident non aliquip do nostrud pariatur excepteur do tempor dolor sunt ad eu nulla officia. Aute irure irure mollit voluptate reprehenderit dolor eiusmod anim mollit dolore aliqua deserunt ullamco pariatur. Sit consectetur laborum eiusmod ad aute elit enim.Cillum sunt elit laboris id consequat culpa. Ex sit pariatur mollit esse ea velit est culpa proident aliqua aliqua. Officia proident nostrud non ipsum enim dolor irure cillum. Cupidatat est occaecat quis mollit enim veniam et duis officia adipisicing mollit. Irure labore aliqua culpa id. Aliquip aute dolor irure tempor.
      </p>
      <p>
        Do elit sint amet adipisicing adipisicing. Nisi elit deserunt enim enim. Ipsum reprehenderit anim consequat irure adipisicing occaecat ut voluptate do ex aute mollit quis dolor. Proident non aliquip do nostrud pariatur excepteur do tempor dolor sunt ad eu nulla officia. Aute irure irure mollit voluptate reprehenderit dolor eiusmod anim mollit dolore aliqua deserunt ullamco pariatur. Sit consectetur laborum eiusmod ad aute elit enim.Cillum sunt elit laboris id consequat culpa. Ex sit pariatur mollit esse ea velit est culpa proident aliqua aliqua. Officia proident nostrud non ipsum enim dolor irure cillum. Cupidatat est occaecat quis mollit enim veniam et duis officia adipisicing mollit. Irure labore aliqua culpa id. Aliquip aute dolor irure tempor.
      </p>
      <p>
        Do elit sint amet adipisicing adipisicing. Nisi elit deserunt enim enim. Ipsum reprehenderit anim consequat irure adipisicing occaecat ut voluptate do ex aute mollit quis dolor. Proident non aliquip do nostrud pariatur excepteur do tempor dolor sunt ad eu nulla officia. Aute irure irure mollit voluptate reprehenderit dolor eiusmod anim mollit dolore aliqua deserunt ullamco pariatur. Sit consectetur laborum eiusmod ad aute elit enim.Cillum sunt elit laboris id consequat culpa. Ex sit pariatur mollit esse ea velit est culpa proident aliqua aliqua. Officia proident nostrud non ipsum enim dolor irure cillum. Cupidatat est occaecat quis mollit enim veniam et duis officia adipisicing mollit. Irure labore aliqua culpa id. Aliquip aute dolor irure tempor.
      </p>
      <p>
        Do elit sint amet adipisicing adipisicing. Nisi elit deserunt enim enim. Ipsum reprehenderit anim consequat irure adipisicing occaecat ut voluptate do ex aute mollit quis dolor. Proident non aliquip do nostrud pariatur excepteur do tempor dolor sunt ad eu nulla officia. Aute irure irure mollit voluptate reprehenderit dolor eiusmod anim mollit dolore aliqua deserunt ullamco pariatur. Sit consectetur laborum eiusmod ad aute elit enim.Cillum sunt elit laboris id consequat culpa. Ex sit pariatur mollit esse ea velit est culpa proident aliqua aliqua. Officia proident nostrud non ipsum enim dolor irure cillum. Cupidatat est occaecat quis mollit enim veniam et duis officia adipisicing mollit. Irure labore aliqua culpa id. Aliquip aute dolor irure tempor.
      </p>
      <p>
        Do elit sint amet adipisicing adipisicing. Nisi elit deserunt enim enim. Ipsum reprehenderit anim consequat irure adipisicing occaecat ut voluptate do ex aute mollit quis dolor. Proident non aliquip do nostrud pariatur excepteur do tempor dolor sunt ad eu nulla officia. Aute irure irure mollit voluptate reprehenderit dolor eiusmod anim mollit dolore aliqua deserunt ullamco pariatur. Sit consectetur laborum eiusmod ad aute elit enim.Cillum sunt elit laboris id consequat culpa. Ex sit pariatur mollit esse ea velit est culpa proident aliqua aliqua. Officia proident nostrud non ipsum enim dolor irure cillum. Cupidatat est occaecat quis mollit enim veniam et duis officia adipisicing mollit. Irure labore aliqua culpa id. Aliquip aute dolor irure tempor.
      </p>

      {afterComponents.map(
        (AfterComponent, i) => <AfterComponent key={i} {...props} />
      )}

      {afterElements.map((AfterElement, i) => (
        <React.Fragment key={i}>
          {AfterElement}
        </React.Fragment>
      ))}

      <div style={styledDiv}>
        <button style={styledButton} onClick={handleButtonClick}>
          {btnText}
          <span style={styledSpan}>{btnValue}</span>
        </button>
      </div>
    </div>
  )
}
