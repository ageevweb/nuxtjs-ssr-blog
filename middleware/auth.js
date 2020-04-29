export default function (context){
  if(!context.store.getters.checkToken){
    context.redirect('/admin/auth')
  }
}