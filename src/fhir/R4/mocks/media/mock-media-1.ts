import { Media } from "../../types/media";

// https://hl7.org/fhir/R4/media-example.json.html
// Simple photo

export const mockMedia1: Media = {
    "resourceType": "Media",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>status</b>: completed</p><p><b>type</b>: Image <span>(Details : {http://terminology.hl7.org/CodeSystem/media-type code 'image' = 'Image', given as 'Image'})</span></p><p><b>modality</b>: Diagram <span>(Details : {http://terminology.hl7.org/CodeSystem/media-modality code 'diagram' = 'Diagram)</span></p><p><b>subject</b>: <a>Patient/xcda</a></p><p><b>created</b>: 17/12/2017</p><p><b>issued</b>: 17/12/2017 2:56:18 PM</p><p><b>operator</b>: <a>Practitioner/xcda-author</a></p><p><b>device</b>: Acme Camera</p><p><b>height</b>: 145</p><p><b>width</b>: 126</p><p><b>frames</b>: 1</p><p><b>content</b>: </p></div>"
    },
    "status": "completed",
    "type": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/media-type",
          "code": "image",
          "display": "Image"
        }
      ]
    },
    "modality": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/media-modality",
          "code": "diagram"
        }
      ]
    },
    "subject": {
      "reference": "Patient/xcda"
    },
    "createdDateTime": "2017-12-17",
    "issued": "2017-12-17T14:56:18Z",
    "operator": {
      "reference": "Practitioner/xcda-author"
    },
    "device": {
      "display": "Acme Camera"
    },
    "height": 145,
    "width": 126,
    "frames": 1,
    "content": {
      "id": "a1",
      "contentType": "image/gif",
      "data": "R0lGODlhfgCRAPcAAAAAAIAAAACAAICAAAAAgIAA    gACAgICAgMDAwP8AAAD/AP//AAAA//8A/wD/////    /wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA    AAAAAAAAAAAAAAAAAAAAAAAAMwAAZgAAmQAAzAAA    /wAzAAAzMwAzZgAzmQAzzAAz/wBmAABmMwBmZgBm    mQBmzABm/wCZAACZMwCZZgCZmQCZzACZ/wDMAADM    MwDMZgDMmQDMzADM/wD/AAD/MwD/ZgD/mQD/zAD/    /zMAADMAMzMAZjMAmTMAzDMA/zMzADMzMzMzZjMz    mTMzzDMz/zNmADNmMzNmZjNmmTNmzDNm/zOZADOZ    MzOZZjOZmTOZzDOZ/zPMADPMMzPMZjPMmTPMzDPM    /zP/ADP/MzP/ZjP/mTP/zDP//2YAAGYAM2YAZmYA    mWYAzGYA/2YzAGYzM2YzZmYzmWYzzGYz/2ZmAGZm    M2ZmZmZmmWZmzGZm/2aZAGaZM2aZZmaZmWaZzGaZ    /2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/    mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkz    M5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm    /5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnM    mZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwA    M8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz    /8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZ    mcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/    M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A    //8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9m    mf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/M    M//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP//    /yH5BAEAABAALAAAAAB+AJEAQAj/AP8JHEiwoMGD    CBMqXMiwocOHECNKnEixosWLGFHAckaN2jRnsKZh    HEmy5EMU0+L5EseNG654KEzKnGkShbN4uFq2xOWR    ps+fE5nEy6Wz5a+XQJMqTeisGdGiLuNRi7m0qlJn    06iF7LhxKoqvX2FpnRYSq1eBX62qRYhCKzWzZDeK    3bqR7NSsb99uddZ2r1ZnINuanbrWp82tb8ly/Bjy    a1aOKOu+5ZgXZFa7sARzBMl5a9rCJDl29ejxMuDK    eb3mJYsSa93GIOW61QgWbEjQGStbrru7o2K3dkXj    BUz242WUbj0u9vj1b2KquCn27Rq7I1+9nBkn7gyS    K/HBnFd3/y8bUizf6CM76s0qduxp0pvN23UrOnF7    zB7nWiaMXuZhvGJNoxhjpr3G3WMfJfdbgtD1p1Rb    xgkHX3uUbeYbdli5dp6DHHbo4YcghijiiCSWeJJG    rJloIkoqPeXLNA2q+GFHm+yUSzzxiCQjiG3hVFQu    N+74IQry4JSTTjfCImSHyE1TyS9I+iJPZkv21ySE    +bE31VTjhZfZfhm2V+VJXLH3WH70MfZVeKfF9Z1i    nv3mXldjEiTYmX9tpVhkXrW1JpfX6bVdnosh19xG    INVpk3JydafYZjC6RhqMNlHa11u0aQbjl/mVJaB1    McrY16eSSeYle2AmqGp5wIl1KVxj+f8WIDV1/iOY    Vote5lt4eZUn6WsI+kZgp6iVxV+tAs064aqUebdr    aW55GqZ2AiIWKrIHQahfo3bBeaZ5zq1q17XYMoQl    eQt+Jxt56jXrarnwxivvvPTWa++9TJYlGrn4+kdN    PJv4kksz92zY709ExqPJkbncw+/BI9mEDy4Mx+MM    xD/9+xQ3m+RIK8Yz2STPkS11s8nFIMvEhDw1FoVL    xynLdI9KR+bUMMoxR+yML1BxIyWMOY+0kTxQuizV    w0E3hOJjBTe9UYO1fZZ0Qlga59hYvgLX3W7GWo20    vLWV5uqjlHZUaVcDbukuZVTe29poqNYnZ2ZzrdbV    0hRmdZh9dX3/raKv5MknG19YVojmVPIJmtlwhBpX    bq4V6trd1VhV6t5jfM6XWWVzaRmZ3yO+3WaAi3XG    FZfP2vRnYogLp+tec4Ee4qLZ3dfV3XXpHanZMHJV    d6WsucprXJiOyaZ+iaH60aJ1JxirRoCF5Wdmfnql    J9uUVdma1m7CvTe74mHWLSyNgft6nmaDNSZy5o1m    HvPWadW+aN9luVxglpnVeXF6Kxr/88MhX3wcJZsB    uS81uDpc+5KDM0VBr3SlAQx1LBSSy1AHT2iSS1u2    E6DYwUtbGTQOacj3mPGg6TeSEZBrWAUnyMzrbVk6    XVyKsxgCwW0/62GMhVKErw12S1D5S0185RQnn8XQ    xYUx45NyNOe87gCRPubZj+xeaB+smIl+yllirCho    xKmhxExoK1Cv0BSftAVmamhMoxrXyMY2uvGNcIyj    HOeoxkXBh44OOZdn8Ggu+DiPjwtJ2CZyUomCTRGO    KJFHLljiEnkc8o0Sy0U3WpILoAGSLf9qmc86ckmE    /MtHOfEFVjp5EGfc40jieAlgSFmQL27sF/GQx8dY    iRaP8EwnL9ERLW1lS5L5whfxyMcubaWworVEHIX0    xzBRcI9NMBJJ9xgmMTW5E19QQ5m0tAlOjOkzeeiS    lcwcJFSAeSxSomRjuDT/2y6ncQ9fkMwozMkmVhRW    lFTGk5T5sAlgaCawjjWjnJcEYoYWRJU/CUdqbQSX    bNYEGRQZjj630qAXO7MmRJ3pOq65DOOiBaqghaVy    a4sUcrKYn+ugay+PXFJzgiOesGWISx3sFfRoaEHC    qY9ePmzUpCoTnN5JyobF8lx9zJJSEZlqWNK6D0ar    taDWsY4zOV2NVj5olq2VVIvCQ1GsjKURBSnnbCJk    FbzihxdSqYc1MAyhZZBDPwZ1sKygKiqTHsOqPGFO    L8JrX7cgxBmiYk2LagKo9uQ3LKv2zjGcMlbsVLUv    I2YRUf+Z5fq2GqzRqO04Z2POlyo4m7KGB3oXsmSd    /2Llps7Mh6mVK84FtQW9qllnccLJkFythBgUyo2F    AlzTgMIyqECVDkZltSgSB6unZ8Vwc9jZHKUIJ8Ll    8YkvkmLUa3koJPaFdoGeK2Ln9KI6S4GFVMsDV31e    M1vQqPZT+uMpcJYY2/V89y9+0tuoKuqp8mhvfKnx    7NNI95fiCIpx1Nmchrj1VbaWtzAOdSLr6MLX+5VH    Px+BVIVQdLuXKk8v2pMg69wzFodez0x/Fa+37tQ4    CcbnwAge6Icbg9Ww6gpAALLrXer20mKhuDDGoWlg    /Aveq8InizQsjwq7GkQEEVVRsWHQYYIYQ+cFK00G    4o1webxWZEEIsVAEznmH6N1Y4eiUNJaLaRex9UVf    wWlSJCRhr+AiZElZsYZoi5xg12eqp3buNEJm3LRQ    BcTeSZUx8/pLdk53w9p6CYKE/p+J83NjJuUPeemq    71bbqrjTkTEvjfaQDyFFnXbJr1lshqIKnaja4uHr    tWEa4beqRZpJpXcvy3kaxhxD6U/NqaQ0xCr6jJhp    FUlYPVl01HrsI8JYPSdpoCXhEG2YUVzrqT2mzpkS    KVRAG955u3SJdhITZ766KosyNjQOnZAt6F3d7oQJ    +inaJNPrHUXt3fCOt7ylSe962/ve+M63vvkYEAA7",
      "creation": "2009-09-03"
    }
  }