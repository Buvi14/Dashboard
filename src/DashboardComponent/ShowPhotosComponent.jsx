/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

export default function ShowPhotosComponent({ photos, count }) {
    const [items, setCurrentItems] = useState(photos);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    useEffect(() => {
        const numberCount = itemOffset + count;
        setCurrentItems(photos.slice(itemOffset, numberCount));
        setPageCount(Math.ceil(photos.length / count));
    }, [count, itemOffset]);

    const handlePageClick = (e) => {
        let newCount = ((e.selected + 1) * count) % photos.length;
        setItemOffset(newCount);
    }

    return (
        <>{
            items && items.map(photo => {
                return (<div key={photo.id} className="d-flex flex-column flex-wrap gap-2">
                    <img src={photo.url} alt="img" width="50vw" height="50vh" />
                    <p className='text-start'> <b>Title:</b> {photo.title}</p>
                </div>);
            })
        }
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName="page-link"
                activeClassName={"active"}
                activeLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLinkClassName='page-link'
                breakClassName='page-item'
            />
        </>
    )
}
