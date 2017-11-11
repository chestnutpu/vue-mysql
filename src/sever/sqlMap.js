var sqlMap = {
    user: {
        add: 'insert into user_login( username, password) values ( ?, ?)',
        select_id: 'SELECT * from user_login where id = ?',    //查询 userid
        select_password: 'SELECT * from user_login where password = ?'      //查询 password
    }
}
module.exports = sqlMap;