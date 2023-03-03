const router= require("express").Router()
const postController=require("../controllers/mail")
router.post('/postmail',postController.nodemail)
module.exports={routermail:router}