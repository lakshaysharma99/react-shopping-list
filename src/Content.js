import ItemList from './ItemList'

const Content = ({ items, handleCheck, handleDelete }) => {

    
    return (
        <main className='content'>
            {items.length ? (
                <ItemList 
                    items={items} 
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{ marginTop: '2rem'}}>List is empty!</p>
            )}
        </main>
  )
}

export default Content