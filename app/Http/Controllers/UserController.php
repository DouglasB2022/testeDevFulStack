<?php

namespace App\Http\Controllers;

use App\Models\User;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
    {
        return response()->json(User::all());
    }

    public function show(int $user)
    {
        User::find($user);
    }

    public function update(Request $request, int $user)
    {
        $users = User::find($user);
        $usuarioAutenticado = $request->user();

        if($usuarioAutenticado && $users['nivel'] == 1 || $users['nivel'] == 2){
            $users->fill($request->all());
            $users->save();
            return response()->json('Usuário Atualizado com sucesso.');
        }else{
            return response()->json('Usuário não tem permissão', User::all());
        }
    }

    public function destroy(int $user)
    {

        $users = User::find($user);

        if (Auth::user() && $users['nivel'] == 1){
            $users->delete();
            return response()->json('Usuario removido com sucesso');
        }else{
            return response()->json('Permissão inválida');
        }
    }

}
