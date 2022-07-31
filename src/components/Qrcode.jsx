import { useState } from 'react'
import { Button } from '@mui/material'
import QRCode from 'qrcode'

const Qrcode = () => {
    const [url, setUrl] = useState('')
    const [qr, setQr] = useState('')

    const handleChange = (e) => {
        setUrl(e.target.value)
    }

    const generateQRCode = () => {
        QRCode.toDataURL(url, {
            width: 800,
            margin: 2,
            color: {
                // dark: "#335393FF",
                // light: "#eeeeeeff"
            }
        }, (err, url) => {
            if (err) return console.log(err)
            console.log({url})
            setQr(url)
        })
    }

    console.log({ qr })
    return (
        <div className='app'>
            <h2> QR Generator</h2>
            <input 
                type="text"
                placeholder="e.g https://www.google.com"
                value={url}
                onChange={handleChange}
            />
            <Button variant="contained" onClick={() => generateQRCode()}>Generate</Button>
            {/* <button onClick={generateQRCode}>Generate</button> */}
            {qr && <div>
                <img src={qr} alt='download url'/>
                <Button href={qr} color='success' variant="contained" download="qrcode.png">Download</Button>
            </div>
            }
        </div>
    )
}

export default Qrcode;