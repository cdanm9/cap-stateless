@(requires: 'authenticated-user')
service Stateless{
    function showMessage() returns many String;
}