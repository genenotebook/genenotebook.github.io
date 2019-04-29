import React from 'react';

function TileWrapper({ children }){
    return (
      <div className='tile is-ancestor'>
        {children}
      </div>
    )
  }
  
function Tile({ title, image, width = 4, children }) {
    return (
        <div className={`tile is-parent is-${width}`}>
            <article className='tile is-child box'>
                <p className='title is-4 has-text-weight-normal'>
                    { title }
                </p>
                { image }
                <div 
                    style={{ 
                        padding: 8, 
                        textJustify: 'inter-word',
                        textAlign: 'justify',
                    }}
                >
                { children }
                </div>
            </article>
        </div>
    )
}

export { TileWrapper, Tile }