<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{

    public function register(Request $request)
    {

         $request->validate([
            'email'=> 'required|email',
            'cpf' => 'required|min:11|unique:users,cpf',
            'password' => 'required|min:8'
        ],[
            'email.required' => 'Campo de  e-mail é obrigatório',
            'cpf.required' => 'Campo de CPF é obrigatório',
            'cpf.min' => 'Campo de CPF deve possuir 11 caracteres',
            'cpf.unique' => 'CPF informado já está cadastrado no sistema',
            'password.min' => 'A senha deve conter 8 caracteres'
        ]);
        User::create([
            'name' => $request->name,
            'cpf' => $request->cpf ,
            'email' => $request->email,
            'nivel' => $request->nivel,
            'password' => $request->password
    ]);

        return response()->json("Usuário criado com sucesso.");
    }
}
