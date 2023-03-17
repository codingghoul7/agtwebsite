import { Container } from '@mui/system'
import React from 'react'

export default function SideBar() {
  return (
    <div className='sidebar'>
   
    <div class="d-flex flex-row bd-highlight mb-3 mx-auto">
  <div class="p-2 bd-highlight">All Posts(32) </div>
  <div class="p-2 bd-highlight">Article</div>
  <div class="p-2 bd-highlight">Education</div>
  <div class="p-2 bd-highlight">Job</div>

  <div className="sidebarbtn ">
  <button type="button" class="btn btn-secondary  ">Write a post</button>
  <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
  Join group
</button>
</div>
</div>

<hr />

    </div>
  )
}
