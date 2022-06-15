import React from "react";


export function Formulario(){
    return (
        <div>
            <form>
                <h3>Log in</h3><br></br>
                <label for="email">Email:</label><br></br>
                <input type="email" id="email" name="email" /><br></br>
                <label for="senha">Senha:</label><br></br>
                <input type="password" id="senha" name="senha" /><br></br>

                <input type="checkbox" />
                <label for="checkbox" id="lembrei" nome="lembrei">Remember me</label><br></br>
                <button type="button" class="btn btn-primary">Log in</button>
                <hr></hr>

            </form>

        </div>
    );

}


