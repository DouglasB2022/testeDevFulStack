<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;


class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('cpf', 'password');
        Auth::user();
        if (Auth::attempt($credentials)){
            $user = $request->user();
            $token = $user->createToken('auth_token')->plainTextToken;
           return response()->json([
           'access_token' => $token,
           'token_type' => 'Bearer'],'Usuário logado com sucesso.');
       }else{
            return response()->json('Credenciais inválidas.');

        }
   }
   public function logout(Request $request)
    {
        Auth::logout();
        $request->user()->currentAccessToken()->delete();
        return redirect()->intended('/');
   }

    public function recoverPassword(Request $request)
    {
        $users = User::where('email', $request->email)->get();
   }

    public function resetPassword(Request $request)
    {

        $users = Password::sendResetlink($request->only('email'));

        return redirect()->intended('/');
   }
}
