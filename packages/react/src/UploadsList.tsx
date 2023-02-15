import type { UploadListResult } from '@w3ui/uploads-list-core'
import React from 'react'
import { UploadsList as UploadsListCore } from '@w3ui/react-uploads-list'

function Uploads ({ uploads }: { uploads?: UploadListResult[] }): JSX.Element {
  return uploads === undefined || uploads.length === 0
    ? (
      <>
        <div className='w3-uploads-list-no-uploads'>No uploads</div>
        <nav>
          <UploadsListCore.ReloadButton className='reload w3ui-button'>
            Reload
          </UploadsListCore.ReloadButton>
        </nav>
      </>
      )
    : (
      <>
        <div className='w3-uploads-list-data'>
          <table>
            <thead>
              <tr>
                <th>Root CID</th>
              </tr>
            </thead>
            <tbody>
              {uploads.map(({ root }) => (
                <tr key={root.toString()}>
                  <td>
                    <a href={`https://${root.toString()}.ipfs.w3s.link/`}>
                      {root.toString()}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <nav>
          <UploadsListCore.NextButton className='next w3ui-button'>
            Next
          </UploadsListCore.NextButton>
          <UploadsListCore.ReloadButton className='reload w3ui-button'>
            Reload
          </UploadsListCore.ReloadButton>
        </nav>
      </>
      )
}

export const UploadsList = (): JSX.Element => {
  return (
    <UploadsListCore>
      {(props) => (
        <div className='w3-uploads-list'>
          <Uploads uploads={props.uploadsList?.[0].data} />
        </div>
      )}
    </UploadsListCore>
  )
}
