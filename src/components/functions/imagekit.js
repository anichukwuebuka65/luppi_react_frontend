import imageKit from 'imagekit-javascript'

function Imagekit(){
    return new imageKit({
        publicKey: 'public_Xd2RM8ChiA2AeLH5NTe7kHEl8JQ=',
        urlEndpoint: 'https://ik.imagekit.io/feov916dg',
        authenticationEndpoint: 'https://luppi.herokuapp.com/auth'
        //authenticationEndpoint: 'http://localhost:5000/auth'
    })
}

export default Imagekit