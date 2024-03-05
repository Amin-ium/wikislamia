<?php

namespace App\Http\Middleware;



use Closure;
use Illuminate\Http\Request;
use Illuminate\Auth\Middleware\AdminMiddleware as Middleware;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if(!auth()->user() ||  !auth()->user()->is_admin) {
            return redirect('/');
        }else if(auth()->user() &&  auth()->user()->is_admin) {
            return $next($request);
        }
        return $next($request);
    }
}
